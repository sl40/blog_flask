import fire
from helper.date import Date
from logic.silin.notice import send_code_time
from logic.silin.tableau import update_waka_tl
from model.third_api.waka_time import WakaTime


class Cron:
    @staticmethod
    def update_waka_time(days=14):
        """
        更新
        :param days:
        :return:
        """
        start = Date.now().plus_days(-days).format(full=False)
        end = Date.now().format(full=False)
        WakaTime().save_data(start, end)
        update_waka_tl(start, end)


    @staticmethod
    def send_today_coding_time():
        """
        推送今天的编程时间
        :return:
        """
        send_code_time()

    @staticmethod
    def update_wakatime_tableau():
        """
        tableau 更新全部数据
        :return:
        """
        update_waka_tl()



if __name__ == '__main__':
    fire.Fire(Cron)
