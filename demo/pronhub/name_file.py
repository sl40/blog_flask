import os
import re

import redis

redis = redis.Redis(host='127.0.0.1', port=6379, db=1)


def rename_form_redis():
    a = os.listdir('D:\\spiderVideo')
    host = 'D:\\spiderVideo\\'

    for _ in a:
        _file = ''
        if len(_.split('.')) == 2:
            _file = _.split('.')[0] + '.mp4'
        else:
            continue

        if redis.exists(_file):
            _file = redis.get(_file)
            if _file:
                _file = _file.decode()
                _file = re.sub(
                    '[\s+\.\!\/_,$:%^*(+\"\']+|[+——！，。？、~@#￥%……&*（）]+', '',
                    _file)
                _replace = host + _file + '.mp4'
                if not os.path.exists(_replace):
                    os.rename(host + _, host + _file + '.mp4')
                else:
                    os.remove(host+_)


rename_form_redis()
