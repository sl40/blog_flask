import time
from functools import lru_cache

'''
修饰器demo
'''


def clock(func):
    """
    运行时间修饰器
    :param func:
    :return:
    """
    def clocked(*args):
        print(args)
        t0 = time.perf_counter()  # 获取当前时间
        result = func(*args)  # 获取修饰的方法结果
        elapsed = time.perf_counter() - t0  # 获取时间差
        name = func.__name__
        arg_str = ','.join(repr(arg) for arg in args)
        print('[%0.8fs]%s(%s)->%r' % (elapsed, name, arg_str, result))
        return result

    return clocked


@clock
def test(s):
    time.sleep(s)
    return s


"""
least recently used
把耗时的任务保存起来 避免相同参数的时候重复计算
如果方法传入相同的参数复用缓存里面的结果
"""


@lru_cache()
@clock
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 2) + fibonacci(n - 1)


print(fibonacci(25))
