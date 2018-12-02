from config.config import config
import logging


class Log:
    def __init__(self):
        self.log_level = config.get('log', 'level')
        self.log_dir = config.get('log', 'dir')
        self.console_handler = self.create_console_handler()
        self.error_handler = self.create_file_handler('error', 'ERROR')

    # 创建文件handler
    def create_file_handler(self, file_name, log_level=None):
        handle = logging.FileHandler('%s/%s.log' % (self.log_dir, file_name))
        handle.setLevel(log_level if log_level else self.log_level)
        return handle

    # 创建命令行handler
    def create_console_handler(self):
        console = logging.StreamHandler()
        console.setLevel(self.log_level)
        return console

    def create_logger(self, logger_name, level=config.get('log', 'level')):
        l = logging.getLogger(logger_name)
        l.setLevel(level)
        l.propagate = False
        l.addHandler(self.error_handler)
        l.addHandler(self.create_file_handler(logger_name))
        return l


log = Log()
logger = log.create_logger('app')
request_logger = log.create_logger('request', 'INFO')
