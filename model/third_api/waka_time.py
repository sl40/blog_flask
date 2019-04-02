import json

import requests

from helper.date import Date
from helper.redis import *

API_KEY = '55d4d753-f87d-4a17-8580-76e2e242d0b5'


class WakaTime:
    def __init__(self):
        self.api_key = API_KEY
        self.url = ''

    def _set_date(self, start, end):
        self.url = 'https://wakatime.com/api/v1/users/current/summaries' \
                   '?&start=%s&end=%s&api_key=%s' % (start, end, self.api_key)
        return self

    def _get_data(self):
        return requests.get(self.url).json()

    def save_data(self, start, end):
        data = self._set_date(start, end)._get_data().get('data')
        for _ in data:
            third_redis.set(add_key(WAKA_TIME, start), json.dumps(_))
            print('wakatime成功写入redis ----> %s'%start)
            start = Date(start).plus_days(1).format(full=False)

    def get_all_data(self):
        # todo
        pass

    def get_last_week(self):
        for date in Date().generator_date(Date().now().to_week_start(),
                                          Date().now().to_day_end()):
            date = date.format(full=False)
            data = third_redis.get(add_key(WAKA_TIME, date))
            data = json.loads(data,encoding='utf-8')

    def get_data_by_day(self, date):
        data = third_redis.get(add_key(WAKA_TIME, date))
        if not data :
            return {}
        data = json.loads(data, encoding='utf-8')
        return data


