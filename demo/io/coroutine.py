def simple_coroutine():
    print('-> coroutine started')
    x = yield
    print('-> coroutine received:',x)




def acerager():
    total = 0
    count = 0
    average = None
    while True:
        term = yield average
        total += term
        count += 1
        average = total / count


