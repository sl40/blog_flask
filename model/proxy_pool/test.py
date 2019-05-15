import asyncio
import time

import aiohttp

from model.proxy_pool.store import ProxyPool

VALID_STATUS_CODES = [200]
TEST_URL = 'https://www.baidu.com'
BATCH_TEST_SIZE = 100


class Tester(object):
    def __init__(self):
        self.db = ProxyPool()

    async def test_single_proxy(self, proxy):
        conn = aiohttp.TCPConnector(verify_ssl=False)
        async with aiohttp.ClientSession(connector=conn) as session:
            try:
                if isinstance(proxy, bytes):
                    proxy = proxy.decode('utf-8')
                real_proxy = 'http://' + proxy
                async with session.get(
                        TEST_URL, proxy=real_proxy, timeout=15) as response:
                    if response.status in VALID_STATUS_CODES:
                        self.db.max(proxy)
                        print('代理可用', proxy)
            except:
                self.db.decrease(proxy)
                print('代理失败',proxy)

    def run(self):
        print('测试器开始运营')
        try:
            proxies = self.db.all()
            loop = asyncio.get_event_loop()
            for i in range(0, len(proxies), BATCH_TEST_SIZE):
                test_proxies = proxies[i:i + BATCH_TEST_SIZE]
                tasks = [self.test_single_proxy(proxy) for proxy in test_proxies]
                loop.run_until_complete(asyncio.wait(tasks))
                time.sleep(5)
        except Exception as e:
            print('测试器发生错误', e.args)


