from pyecharts import Bar
from helper.date import Date
from model.image.image import Image
from model.third_api.dingding import RobotDing
from model.third_api.waka_time import WakaTime

a = Image().get_waka_image_url('2018-01-01')
print(a)
