import os

import requests
from contextlib import closing


def url_down_load(url, name):
    with closing(requests.get(url, stream=True)) as response:
        host = 'D:\\spiderVideo\\%s.mp4' % name
        chunk_size = 1024*1024 # 单次请求最大值
        content_size = int(response.headers['content-length'])  # 内容体总大小
        data_count = 0
        os.path.exists(host)
        with open(host, "wb") as file:
            for data in response.iter_content(chunk_size=chunk_size):
                file.write(data)
                data_count = data_count + len(data)
                now_jd = (data_count / content_size) * 100
                # print("\r 文件下载进度：%d%%(%d/%d) - %s" % (
                #     now_jd, data_count, content_size, url), end=" ")
