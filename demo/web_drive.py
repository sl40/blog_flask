import time
import urllib.parse

from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import requests
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.chrome.options import Options
import cachetools

from lxml import etree
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import re
import redis

redis = redis.Redis(host='127.0.0.1', port=6379, db=1)

class FastDriver(webdriver.Chrome):
    def __init__(self):
        options = webdriver.ChromeOptions()

        # 1允许所有图片；2阻止所有图片；3阻止第三方服务器图片
        prefs = {
            'profile.default_content_setting_values': {
                'images': 2
            }
        }
        options.add_experimental_option('prefs', prefs)
        # 无痕模式
        options.add_argument("--incognito")
        options.add_argument("--headless")
        capa = DesiredCapabilities.CHROME
        capa["pageLoadStrategy"] = "none"
        super().__init__(options=options, desired_capabilities=capa)


def get_urls_data():
    key = '腿'
    for page in range(10):
        url = 'https://www.pornhub.com/video/search?search=%s&page=%s' % (
            key, str(page + 1))
        print('--->开始页数%d'%page)
        yield get_page_data(url)


def get_page_data(url):
    # drive = webdriver.Chrome()
    driver = FastDriver()
    try:
        driver.get(url)
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.ID, 'videoSearchResult')))
    except:
        print('加载超过20秒，强制停止加载....')
        # 当页面加载时间超过设定时间，通过执行Javascript来stop加载，即可执行后续动作
    data = driver.page_source
    driver.close()
    return data


def get_url(data):
    URL = 'https://www.pornhub.com'
    # file = open('1.html', encoding='utf-8')
    # data = file.read()
    # noinspection PyUnresolvedReferences
    html = etree.HTML(data)
    title = html.xpath(
        '//ul[@id="videoSearchResult"]//span[@class="title"]/a/@title')
    url = html.xpath(
        '//ul[@id="videoSearchResult"]//span[@class="title"]/a/@href')
    rate = html.xpath(
        '//div[@class="rating-container up"]//div[@class="value"]/text()')
    result = []
    for _ in range(20):
        result.append({"url": URL + url[_], "title": title[_],'rate':int(rate[_][:-1])})


    return result


def get_down_load_rul(url):
    drive = FastDriver()
    try:
        drive.get('https://www.savido.net')
        WebDriverWait(drive, 20).until(
            EC.presence_of_element_located((By.ID, 'curl')))
        drive.find_element_by_id('curl').send_keys(url)
        drive.find_element_by_id('downloadButton').click()
        WebDriverWait(drive, 20).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'table-responsive')))
        data = drive.page_source
        html = etree.HTML(data)
        re = html.xpath('//td/a/@href')
    except:
        time.sleep(10)
        return
    drive.close()
    if len(re) > 0:
        return re.pop()


def main():
    for page_data in get_urls_data():
        for _ in get_url(page_data):
            _url = _.get('url')
            _title = _.get('title')
            _rate = _.get('rate',0)
            if _rate<60:
                continue
            url = get_down_load_rul(_url)
            print('--->开始抓取%s'%url)
            if url:
                file = open('3.txt', encoding='utf-8', mode='a')
                file.write(url + '\n')
                file.close()
                video = re.search(r"\w+_.+\.mp4",url).group()
                if video:
                    redis.set(video, _title)
                    print('-->成功抓取%s'%_title
                    )
                # url_down_load(url,_title)


if __name__ == '__main__':
    main()

