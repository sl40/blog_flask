import os

from config.config import config


class Image:
    def __init__(self, name=''):
        self._dir = config.get('image', 'dir')
        self._name = name
        self._path = self._dir + name
        self._host = config.get('host', 'good40')

    def get_path(self):
        return self._path

    def get_dir(self):
        name = self._path.split('/')[-1]
        return self._path.replace(name, '')

    def make_dir(self):
        if not os.path.exists(self.get_dir()):
            os.makedirs(self.get_dir())
        return self

    def get_file(self):
        try:
            with open(self._path, 'rb') as f:
                print(self._path)
                image = f.read()
        except:
            return
        return image

    def get_waka_image_url(self, date):
        return self._host + 'images/waka/%s.jpeg' % date
