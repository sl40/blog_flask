import subprocess
import base64
thunder_path = 'D:\\thunder\\Program\\Program\\Thunder.exe'
def Url2Thunder(url):
    url = 'AA' + url + 'ZZ'
    url = base64.b64encode(url.encode('ascii'))
    url = b'thunder://' + url
    thunder_url = url.decode()
    return thunder_url


def download_with_thunder(file_url):
    thunder_url = Url2Thunder(file_url)
    subprocess.call([thunder_path, thunder_url])


