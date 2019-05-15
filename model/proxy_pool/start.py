import time

from model.proxy_pool.ProxyMetaclass import Getter
from model.proxy_pool.test import Tester


def main():
    while True:
        Tester().run()
        time.sleep(60)


if __name__ == '__main__':
    main()
