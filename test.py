
from lxml import etree
def get_url():
    URL = 'https://www.pornhub.com'
    file = open('1.html', encoding='utf-8')
    data = file.read()
    print(data)
    # noinspection PyUnresolvedReferences
    html = etree.HTML(data)
    print(html)
    title = html.xpath(
        '//ul[@id="videoSearchResult"]//span[@class="title"]/a/@title')
    url = html.xpath(
        '//ul[@id="videoSearchResult"]//span[@class="title"]/a/@href')
    rate = html.xpath(
        '//div[@class="rating-container up"]//div[@class="value"]/text()')
    result = []
    for _ in range(20):
        result.append({"url": URL + url[_], "title": title[_],'rate':int(rate[_][:-1])})

    return result
