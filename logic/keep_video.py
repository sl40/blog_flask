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
from helper.redis import product_redis


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
        #无头浏览器
        # options.add_argument("--headless")
        capa = DesiredCapabilities.CHROME
        capa["pageLoadStrategy"] = "none"
        super().__init__(options=options, desired_capabilities=capa)


def get_page_data(url):
    driver = FastDriver()
    try:
        driver.get(url)
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.ID, "videoPlaylist")))
    except:
        print('加载超过20秒，强制停止加载....')
        driver.close()
    # 当页面加载时间超过设定时间，通过执行Javascript来stop加载，即可执行后续动作
    data = driver.page_source
    driver.close()
    vidoes =get_video_url(data)
    return vidoes

def get_video_url(data):
    URL = 'https://www.pornhub.com'
    # file = open('playlist.html', encoding='utf-8')
    # data = file.read()
    # noinspection PyUnresolvedReferences
    html = etree.HTML(data)
    title = html.xpath(
        '//ul[@id="videoPlaylist"]//span[@class="title"]/a/@title')
    url = html.xpath(
        '//ul[@id="videoPlaylist"]//span[@class="title"]/a/@href')
    videos = {}
    for _ in range(len(url)):
        videos[title[_]]=URL+url[_]
    return videos

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

if __name__ == '__main__':
    for name,url in get_page_data("https://www.pornhub.com/playlist/72958812").items():
        video_url = get_down_load_rul(url)
        if video_url:
            product_redis.set(name,video_url)
            print('成功%s-->%s'%(name,video_url))
        else:
            print('失败%s-->%s'%(name,url))
