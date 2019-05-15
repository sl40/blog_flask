from peewee import *
from config.config import config

ymdb = MySQLDatabase(config.get('mysql-ym', 'database'),
                     user=config.get('mysql-ym', 'user'),
                     charset='utf8',
                     password=config.get('mysql-ym', 'password'),
                     host=config.get('mysql-ym', 'host'),
                     port=int(config.get('mysql-ym', 'port')))


