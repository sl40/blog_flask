import asyncio
import collections
import aiohttp
import os, time, sys, requests
import random
from concurrent import futures


def down_load_many():
    workers =10
    with futures.ThreadPoolExecutor(workers) as executor:
        to_do = []
        for cc in [1, 2, 3, 4, 5,6,7,8,9,10]:
            future = executor.submit(download_file, cc)
            to_do.append(future)
            msg = '执行{}:{}'
            print(msg.format(cc, future))

        results = []
        for future in futures.as_completed(to_do):
            res = future.result()
            print(future, res)
            results.append(res)
    return len(list(results))


def down_load_many1():
    a = []
    for _ in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]:
        a.append(download_file(_))

    return len(list(a))


def download_file(a):
    url = 'http://61.147.122.7/mp3.9ku.com/mp3/535/534610.mp3'
    url ='http://static.runoob.com/images/dashang/weipayimg.png'
    r = aiohttp.request('get', url, stream=True)
    content_size = int(r.headers['content-length'])
    down = 0
    with open(str(a) + '.mp3', "wb") as f:
        for chunk in r.iter_content(chunk_size=1024*1024):
            print(a)
            if chunk:
                f.write(chunk)
                down += 1024
                # print('%d/%d' % (down, content_size))
    return a






def main(fun):
    t0 = time.time()
    count = fun()
    end = time.time() - t0
    print(count, end)


if __name__ == '__main__':
    main(down_load_many)
