import json

import requests
from qiniu import Auth, put_file, etag
import qiniu.config
from helper.date import Date
from helper.redis import *

ACCESS_KEY = 'Nq-3xof5NdHma7v4zR14wbDd2jV4RYZaZNqAJyQo'
SECRET_KEY = 'tgjoVuTh30bMmiv9mi_EWeLIYpscD4QBf7aP3nQh'


class QiNiu:
    def __init__(self):
        self.access_key = ACCESS_KEY
        self.secret_key = SECRET_KEY
        self.auth = Auth(self.access_key, self.secret_key)

    def save_image(self, path, bucket='temp', file_name=''):
        """
        :param path: 图片位置
        :param bucket: 上传的空间
        :param file_name: 上传后保存的名字
        :return:
        """
        if not file_name:
            file_name = path.strip('/')[-1]
        ret, info = put_file(self.auth.upload_token(bucket, file_name),
                             file_name, path)
        print(info)
        assert ret['key'] == file_name
        assert ret['hash'] == etag(path)


# -*- coding: utf-8 -*-
# flake8: noqa


# #需要填写你的 Access Key 和 Secret Key
# access_key = 'Nq-3xof5NdHma7v4zR14wbDd2jV4RYZaZNqAJyQo'
# secret_key = 'tgjoVuTh30bMmiv9mi_EWeLIYpscD4QBf7aP3nQh'
#
# #构建鉴权对象
# q = Auth(access_key, secret_key)
#
# #要上传的空间
# bucket_name = 'Bucket_Name'
#
# #上传后保存的文件名
# key = 'my-python-logo.png'
#
# #生成上传 Token，可以指定过期时间等
# token = q.upload_token(bucket_name, key, 3600)
#
# #要上传文件的本地路径
# localfile = './sync/bbb.jpg'
#
# ret, info = put_file(token, key, localfile)
# print(info)
# assert ret['key'] == key
# assert ret['hash'] == etag(localfile)
