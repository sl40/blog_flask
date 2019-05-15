from flask import Blueprint, Response, jsonify, request

# 蓝图的基本概念是：在蓝图被注册到应用之后，所要执行的操作的集合。当分配请求 时， Flask 会把蓝图和视图函数关联起来，并生成两个端点之前的 URL 。
from helper.date import Date
from helper.redis import third_redis, add_key, SELF
from model.third_api.waka_time import WakaTime

self = Blueprint('self', __name__, url_prefix='/self')


@self.route('/dayStatues')
def set_weight():
    arg = request.get_data()
    date = arg.get('date', Date.now().format(full=False))
    weight = arg.get('weight', 0)
    weight_rate = arg.get('weightRate', 0)
    third_redis.set(add_key(SELF, date),
                    {'wight': weight, 'weightRate': weight_rate})


@self.route('/setAim')
def get_weight():
    arg = request.get_data()
    date = arg.get('date', Date.now().format(full=False))
    third_redis.set(add_key(SELF, date), arg)


@self.route('/getWeights')
def set_weights():
    arg = request.get_data()
    start = arg.get('start')
    end = arg.get('end')
    days = []
    for _ in Date().generator_date(start, end):
        days.append([_])

    date = arg.get('date', Date.now().format(full=False))
    third_redis.set(add_key(SELF, date), arg)



