from model.image.image import Image
from model.third_api.dingding import RobotDing
from model.third_api.waka_time import WakaTime
from pyecharts import Bar
from helper.date import Date


def send_code_time():
    date = Date.now().plus_days(-1).format(full=False)
    data = WakaTime().get_data_by_day(date)
    project = []
    project_time = []
    total = data['categories'][0].get('text')
    bar = Bar('今日编程时间:' + total, date)
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
    bar.use_theme("vintage")
    path = Image('waka/%s.jpeg' % date).make_dir().get_path()
    bar.render(path)
    url = Image().get_waka_image_url(date)
    RobotDing().set_template_waka(date, total, url).send()


