import os

import pyecharts
from model.image.image import Image
from model.third_api.dingding import RobotDing
from model.third_api.waka_time import WakaTime
from pyecharts import Bar

from helper.date import Date

pyecharts.configure(
    jshost=pyecharts.online(),
    echarts_template_dir=None,
    force_js_embed=pyecharts.online(),
    output_image=None,
    global_theme='dark'
)


def send_code_time():
    date = Date.now().plus_days(-1).format(full=False)
    data = WakaTime().get_data_by_day(date)
    project = []
    project_time = []
    total = data['categories'][0].get('text')
    bar = Bar(date,   total)
    for _ in data['projects']:
        hour = round(_.get('total_seconds', 0) / 3600, 2)
        if hour == 0:
            continue
        bar.add(
            _.get('name'),
            [_.get('name')],
            [hour],
            is_label_show=True
        )
        project_time.append(round(_.get('total_seconds', 0) / 3600, 2))
        project.append(_.get('name'))
    path = Image('waka/%s.jpeg' % date).make_dir().get_path()
    bar.render(path)
    url = Image().get_waka_image_url(date)
    RobotDing().set_template_waka(date, total, url).send()


