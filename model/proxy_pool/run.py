import http.cookiejar
import random
import time
import urllib.request

import requests
from lxml import etree
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from helper.web_drive import FastDriver
from model.proxy_pool.store import ProxyPool

USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, '
    'like Gecko) Chrome/39.0.2171.95 Safari/537.36 OPR/26.0.1656.60',
    'Opera/8.0 (Windows NT 5.1; U; en)',
    'Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 '
    'Firefox/2.0.0 Opera 9.50',
    'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; en) Opera 9.50',
    'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:34.0) Gecko/20100101 Firefox/34.0',
    'Mozilla/5.0 (X11; U; Linux x86_64; zh-CN; rv:1.9.2.10) Gecko/20100922 '
    'Ubuntu/10.10 (maverick) Firefox/3.6.10',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.57.2 (KHTML, '
    'like Gecko) Version/5.1.7 Safari/534.57.2',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, '
    'like Gecko) Chrome/39.0.2171.71 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) '
    'Chrome/23.0.1271.64 Safari/537.11',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/534.16 ('
    'KHTML, like Gecko) Chrome/10.0.648.133 Safari/534.16',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, '
    'like Gecko) Chrome/20.0.1132.11 TaoBrowser/2.0 Safari/536.11',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, '
    'like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER',
    'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; '
    'SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media '
    'Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)',
    'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.11 (KHTML, like Gecko) '
    'Chrome/17.0.963.84 Safari/535.11 SE 2.X MetaSr 1.0',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0; SV1; '
    'QQDownload 732; .NET4.0C; .NET4.0E; SE 2.X MetaSr 1.0)',
    'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, '
    'like Gecko) Chrome/38.0.2125.122 UBrowser/4.0.3214.0 Safari/537.36'
]


def spider():
    num = 0  # 用于访问计数
    err_num = 0  # 用于异常错误计数
    # 从列表中随机选择UA和代理
    user_agent = random.choice(USER_AGENTS)
    for _ in range(100):
        url = 'https://blog.csdn.net/u012739198/article/details/90108131'
        proxy = ProxyPool().random()
        print(proxy)
        headers = {
            # "Host": "blog.csdn.net",
            # "Connection": "keep-alive",
            # "Content-Length": 0,
            # "Accept": "*/*",
            # "Origin": "https://blog.csdn.net",
            # "X-Requested-With": "XMLHttpRequest",
            "User-Agent": random.choice(USER_AGENTS),
            # "Referer": "https://blog.csdn.net/u012739198/article/details/90108131",
            # "Accept-Encoding": "gzip, deflate, br",
            # "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8"
        }
        try:
            # proxy_hander = urllib.request.ProxyHandler({
            #     'https': proxy
            # })
            headers = {
                'cache-control': "no-cache",
                'postman-token': "3a05e5ee-035f-5c7c-afc0-6bd3816b4816",
                'Cookie':'acw_tc=2760820b15578973107038417ebbc346b0bfa9c158522a96a75cafc48c05e3; acw_sc__v3=5cdba084d515f186f25683a190b256e747735d7d; uuid_tt_dd=10_20852516420-1557897348907-263679; dc_session_id=10_1557897348907.412836; acw_sc__v2=5cdba05ebe13cf8e617ff13b24cfdb67d9530c50'
            }

            response = requests.request("GET", url, headers=headers,
                                        proxies={'http': proxy})
            print(response.status_code)
            # print(response.text)
            # data = requests.get(url).content
            # header = []
            # for key, value in headers.items():
            #     elem = (key, value)
            #     header.append(elem)
            # # cj = http.cookiejar.CookieJar()
            # opener = urllib.request.build_opener()
            # opener.add_handler(proxy_hander)
            # opener.addheaders = header
            # uop = opener.open(url, timeout=10)
            # data = uop.read()
        except Exception as result:
            err_num += 1
            print("错误信息(%d):%s" % (err_num, result))
            # 当错误信息大于等于30时，初始化代理页面page，重新从第一页开始获取代理ip，并退出循环
        time.sleep(2)


def spider_chrome():
    url = 'https://blog.csdn.net/u012739198/article/details/90108131'
    for _ in range(100):
        prxoy = ProxyPool().random()
        driver = FastDriver(proxy=prxoy)
        driver.get(url)
        try:
            WebDriverWait(driver,10).until(
            EC.presence_of_element_located((By.ID, 'article_content')))
            html = etree.HTML(driver.page_source)
            count =html.xpath('//*[@id="mainBox"]/main/div[1]/div/div/div[2]/div[1]/span[2]/text()')
            print(count,prxoy)
        except:
            print('加载超过20秒，强制停止加载....')
        driver.close()


def main():
    spider_chrome()


if __name__ == '__main__':
    main()
