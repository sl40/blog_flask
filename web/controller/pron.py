from flask import Blueprint, jsonify

from helper.redis import product_redis

pron = Blueprint('pron', __name__, url_prefix='/pron')


@pron.route('/videos')
def get_pron_video():
    videos = product_redis.hgetall('url')
    re = {}
    for name, url in videos.items():
        re[name.decode('utf-8')] = url.decode('utf-8')
    return jsonify(re)
