from helper.redis import test_redis
from random import choice


class ProxyPool(object):
    MAX_SCORE = 100
    MIN_SCORE = 0
    INITIAL_SCORE = 10
    REDIS_KEY = 'proxies'

    def __init__(self, db=test_redis):
        self.db = db

    def add(self, proxy, score=INITIAL_SCORE):
        if not self.db.zscore(self.REDIS_KEY, proxy):
            return self.db.zadd(self.REDIS_KEY, proxy, score)

    def random(self):
        result = self.db.zrangebyscore(self.REDIS_KEY, 100, 100)
        if len(result):
            ip = choice(result)
            if type(ip) is bytes:
                return str(ip, encoding='utf-8')
            return ip
        else:
            raise 1

    def decrease(self, proxy):
        score = self.db.zscore(self.REDIS_KEY, proxy)
        if score and score > self.MIN_SCORE:
            print('代理', proxy, '当前分数', score, '减1')
            return self.db.zincrby(self.REDIS_KEY, proxy, -1)
        else:
            print('代理', proxy, '当前分数', score, '移除')
            return self.db.zrem(self.REDIS_KEY, proxy)

    def exists(self, proxy):
        return not self.db.zscore(self.REDIS_KEY, proxy) is None

    def max(self, proxy):
        return self.db.zadd(self.REDIS_KEY, proxy, self.MAX_SCORE)

    def count(self):
        return self.db.zcard(self.REDIS_KEY)

    def all(self):
        return self.db.zrangebyscore(self.REDIS_KEY, self.MIN_SCORE,
                                     self.MAX_SCORE)

    def good(self):
        return self.db.zrangebyscore(self.REDIS_KEY, self.MAX_SCORE,
                                     self.MAX_SCORE)
