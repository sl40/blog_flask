
class EsField(str):
    def __new__(cls, value, *args, **kwargs):
        # explicitly only pass value to the str constructor
        return super(EsField, cls).__new__(cls, value)

    def __init__(self, value, type='', comment=''):
        # ... and don't even call the str initializer
        super().__init__()
        self.type = type
        self.comment = comment


a = EsField("hello", "world")
print(a)
print(a.type)
print(a.comment)
