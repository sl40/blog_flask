import os
from helper.date import Date
from model.third_api.tableau_mysql import WakaTimeTL, ymdb
from model.third_api.waka_time import WakaTime


def update_waka_tl(start='2019-03-12', end=Date.now()):
    projects = []
    for _ in Date.generator_date(start, end):
        _date = Date(_).format(full=False)
        data = WakaTime().get_data_by_day(_date)
        if data:
            for project in data.get('projects', []):
                projects.append({
                    'date': Date(_date).datetime,
                    'project': project.get('name'),
                    'cost_time': project.get('total_seconds'),
                })

    count = len(projects)
    i = 0
    with ymdb.atomic():
        for _ in projects:
            if not WakaTimeTL.get_or_none(**{'date':_['date'],'project':_['project']}):
                a = WakaTimeTL().create(**_)
            i += 1
            os.system("clear")
            print("正在写入sql-->%d/%d" % (i, count))

update_waka_tl(start ='2019-04-12')
