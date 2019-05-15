import json

import redis

WAKA_TIME = 'waka'

SELF = 'self'


class Redis(redis.Redis):
    def get(self, name):
        data = super().get(name)
        if data:
            data = json.loads(data, encoding='utf-8')
            return data




def add_key(key_type, key):
    return key_type + '_' + key


test_redis = Redis(host='127.0.0.1', port=6379, db=1)
product_redis = Redis(host='27.102.101.120', port=6366, db=1)
# third_redis = redis.Redis(host='27.102.101.120', port=6366, db=2)
third_redis = Redis(host='27.102.101.120', port=6366, db=2)
