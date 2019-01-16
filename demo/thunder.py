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

url = '' \
      'https://cv.phncdn.com/videos/201810/20/188281771/720P_1500K_188281771.mp4?a5dcae8e1adc0bdaed975f0d60fb5e050d523df0cca6435032db1bab0a4b451d8a412585437d6eaf590945e5ef797dd306ff8179298673cb4a5d28ba3e8f56475f1f185f1e92893b355d2f21663f4e0c1cab1ba502b19c5f8fe3bf140eeefd920310d11ca7cbea08926323bce0e8b1bdb08fc3c581c3021f8e808b'
download_with_thunder(url)