from flask import Blueprint, jsonify

from helper.redis import product

pron = Blueprint('pron', __name__, url_prefix='/pron')

@pron.route('/videos')
def get_pron_video():
    videos =product.hgetall('url')
    re = {}
    for name,url in videos.items():
        re[name.decode('utf-8')] = url.decode('utf-8')
    return jsonify(re)




