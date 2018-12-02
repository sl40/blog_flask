# import redis
from config.config import config
print(1)
print(config.get('redis', 'port'))

#
# class Redis:
#     def __init__(self, host=None, port=None, db=None):
#         if host is None:
#             host = config.get('redis', 'host')
#         if host is None:
#             port = config.get('redis', 'port')
#         if host is None:
#             db = config.get('redis', 'db')
#         self.__client = redis.StrictRedis(host=host, port=port, db=db)
#
#     def set(self, key, value, ex=None):
#         self.__client.set(key, value, ex)
#
#     def get(self, key, binary=False):
#         data = self.__client.get(key)
#         if binary:
#             return data
#         return data if not data else data.decode('utf8')
#
#     def exists(self, key):
#         return self.__client.exists(key)
#
#     def delete(self, key):
#         self.__client.delete(key)
#
#     def lrange(self, key, start, end):
#         return self.__client.lrange(key, start, end)
#
#     def type(self, key):
#         return self.__client.type(key).decode()
#
#
# def demo():
#     print(config.get('redis', 'port'))
#     Redis().set('demo', 1, 300)
#
# demo()