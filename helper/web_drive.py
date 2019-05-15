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

class FastDriver(webdriver.Chrome):
    def __init__(self,proxy=None):
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
        if proxy:
            options.add_argument("--proxy-server=http://{}".format(proxy))
        capa = DesiredCapabilities.CHROME
        capa["pageLoadStrategy"] = "none"
        super().__init__(options=options, desired_capabilities=capa)


def get_page_data(url):
    driver = FastDriver()
    try:
        driver.get(url)
        WebDriverWait(driver, 20).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'body')))
    except:
        print('加载超过20秒，强制停止加载....')
        # 当页面加载时间超过设定时间，通过执行Javascript来stop加载，即可执行后续动作
    data = driver.page_source
    driver.close()
    return data

