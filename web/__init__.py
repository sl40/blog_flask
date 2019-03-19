import datetime
from flask import Flask, session, request, g, jsonify
from helper.logging import request_logger
from config.config import config
# 引用需要注册的蓝图
from web.controller.demo import demo
from web.controller.pron import pron

app = Flask(__name__)
app.debug = 1
# 安全的加密
app.secret_key = config.get('web', 'secret_key')
app.register_blueprint(demo)
app.register_blueprint(pron)


# 获取所有的url路径
@app.route("/")
def urls():
    func_list = {}
    for rule in app.url_map.iter_rules():
        if rule.endpoint != 'static':
            func_list[rule.rule] = str(rule.methods)
    return jsonify(func_list)


# 请求开始的时候执行
@app.before_request
def before_request():
    g.start = datetime.datetime.now()


# 请求结束后执行
@app.after_request
def after_request(response):
    request_logger.info({
        'duration': (datetime.datetime.now() - g.start).total_seconds(),
        'username': session.get('cas_username'),
        'userId': session.get('cas_userId'),
        'request.method': request.method,
        'request.host_url': request.host_url,
        'request.full_path': request.full_path,
        'request.data': request.get_data(as_text=True),
        'request.remote_addr': request.remote_addr,
        'response.status': response.status,
        'response.data': response.get_data(as_text=True) if request.path.find('download') < 0 else '',
    })

    return response
