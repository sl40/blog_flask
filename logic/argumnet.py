from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait

from demo.web_drive import FastDriver

driver = FastDriver()
try:
    driver.get('https://blog.csdn.net/u012739198/article/details/90108131')
    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, '')))
except:
    print('加载超过20秒，强制停止加载....')
    # 当页面加载时间超过设定时间，通过执行Javascript来stop加载，即可执行后续动作
