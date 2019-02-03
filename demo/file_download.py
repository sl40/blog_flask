import requests

url = 'http://61.147.122.7/mp3.9ku.com/mp3/535/534610.mp3'
def download_file(url, file_path):
    r = requests.get(url, stream=True)
    content_size = int(r.headers['content-length'])
    down = 0
    with open(file_path, "wb") as f:
        for chunk in r.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)
                down += 1024
                print('%d/%d' % (down, content_size))


download_file(url, '1.mp3')
