from database.mysql import *
from datetime import date

from helper.date import Date
from model.third_api.waka_time import WakaTime


class WakaTimeTL(Model):
    date = DateField()  # 时期
    cost_time = FloatField()  # 花费时间（s）
    project = CharField(100)  # 项目时间

    class Meta:
        database = ymdb
        db_table = 'tableau'
        primary_key = CompositeKey('date', 'project')


