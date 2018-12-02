import os
from configparser import ConfigParser


class CustomConfigParser(ConfigParser):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)


os.environ['TZ'] = 'Asia/Shanghai'
print()
config = CustomConfigParser()
# 读取配置类容
config.read(os.path.dirname(os.path.abspath(__file__)) + '/app.ini', 'utf-8')
# config.read('config/app.ini', 'utf-8')
# os.path.dirname(os.path.abspath(__file__)不同地方的文件引用的时候为什么不会报错？
