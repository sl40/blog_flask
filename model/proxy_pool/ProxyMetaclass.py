import time

import requests
from lxml import etree

from helper.redis import test_redis
from helper.web_drive import get_page_data
from model.proxy_pool.store import ProxyPool


class ProxyMetaclass(type):
    def __new__(cls, name, bases, attrs):
        count = 0
        attrs['__CrawlFunc__'] = []
        for k, v in attrs.items():
            if 'crawl' in k:
                attrs['__CrawlFunc__'].append(k)
                count += 1
        attrs['__CrawlFuncCount__'] = count
        return type.__new__(cls, name, bases, attrs)


class Crawler(object, metaclass=ProxyMetaclass):
    def get_proxies(self, callback):
        proxies = []
        for proxy in eval('self.{}()'.format(callback)):
            print('成功获取到代理', proxy)
            proxies.append(proxy)
        return proxies

    def crawl_kuaidaili(self, page_count=20):
        start_url = 'https://www.kuaidaili.com/free/inha/{}/'
        urls = [start_url.format(page) for page in range(1, page_count + 1)]
        for url in urls:
            time.sleep(1)
            re = requests.get(url).text
            html = etree.HTML(re)
            ips = html.xpath("//td[@data-title='IP']/text()")
            port = html.xpath("//td[@data-title='PORT']/text()")
            for _ in range(len(ips)):
                yield (":".join([ips[_], port[_]]))


class Getter:
    def __init__(self):
        self.pool = ProxyPool()
        self.crawler = Crawler()

    def run(self):
        for callback_label in range(self.crawler.__CrawlFuncCount__):
            callback = self.crawler.__CrawlFunc__[callback_label]
            for proxy in self.crawler.get_proxies(callback):
                self.pool.add(proxy)


