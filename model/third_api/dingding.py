import requests

ROBOT = 'https://oapi.dingtalk.com/robot/send?access_token' \
        '=7edb057b47e8ab154d3e4a05e16eafbb387290830471b4ee73dda6703148529b'


class RobotDing:
    def __init__(self):
        self.url = ROBOT
        self.data = {}

    def send(self):
        requests.post(self.url, json=self.data)

    def set_text(self, text):
        self.data = {
            "msgtype": "text",
            "text": {
                "content": text
            },
        }
        return self

    def set_mark_down(self, title, text, image):
        self.data={
            "msgtype": "markdown",
            "markdown": {
                "title": "编程时间",
                "text":
                    "#### 编程时间  \n > 9度，@1825718XXXX 西北风1级，空气良89，相对温度73%\n\n > ![screenshot](http://i01.lw.aliimg.com/media/lALPBbCc1ZhJGIvNAkzNBLA_1200_588.png)\n  > ###### 10点20分发布 [天气](http://www.thinkpage.cn/) "
            },
        }
        return self

    def set_template_waka(self, date, total, image):
        self.data = {
            "msgtype": "markdown",
            "markdown": {
                "title": "编程时间",
                "text":
                    "#### 编程时间  \n >%s的总计编程%s\n\n > ![screenshot](%s)" % (
                        date, total, image)
            },
        }
        return self

