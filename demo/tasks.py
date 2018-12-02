from celery import Celery
from config.config import config
REDIS_RUL = 'redis://%s:%s' % (config.get('redis', 'host'), config.get('redis', 'port'))
app = Celery('tasks', backend=REDIS_RUL, broker=REDIS_RUL)


@app.task
def add(x, y):
    return x + y

