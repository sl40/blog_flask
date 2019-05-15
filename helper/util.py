import hashlib
from math import ceil
from copy import deepcopy
from helper.date import Date
import uuid
import time
import random
from flask import session, request
from config import config


def table_format(result_list):
    result = {'key': [] if len(result_list) == 0 else list(result_list[0].keys()), 'value': []}
    for _ in result_list:
        result['value'].append(deep_format_float(list(_.values())))
    return result


def generator_page(count, page_size, start=1):
    for page in range(start, int(ceil(count/page_size))+1):
        yield page


def generator_list(l, page_size, start=1):
    _list = list(l)
    for page in range(start, int(ceil(len(_list)/page_size)+1)):
        yield _list[(page-1)*page_size:page*page_size]


def division(a, b, multiple=1, default=0, ndigits=2):
    """
    除法计算
    :param double a:
    :param double b:
    :param double multiple:
    :param double default:
    :param ndigits:
    :return:
    """
    if a is None or b is None:
        return 0
    return round(a / b * multiple, ndigits) if b > 0 else default

def ratio(a, b, multiple=100, default=0):
    """
    计算比率
    :param double a:
    :param double b:
    :param double multiple:
    :param double default:
    :return:
    """
    return round(a / b * multiple, 2) if b > 0 else default


def multiplication(a, b):
    if a is None or b is None:
        return 0
    else:
        return round(float(a) * float(b))


def number_to_any_str(n, s='0123'):
    base = len(s)
    if n < base:
        return s[n]
    else:
        return number_to_any_str(n // base, s) + s[n % base]


def random_copy(s):
    s1 = s
    s2 = s[::-1]
    result = ''
    for _index, _value in enumerate(s1):
        result += _value * int(s2[_index])
    return result


def deep_format_float(data):
    if type(data) == list:
        data = [deep_format_float(_) for _ in data]
    elif type(data) == dict:
        data = dict([(k, deep_format_float(v)) for k, v in data.items()])
    return format_float(data)


def format_float(value):
    if type(value) not in [int, float]:
        return value
    return round(value, 2)


def generator_random_id():
    """create new random id"""
    return str(uuid.uuid5(uuid.NAMESPACE_URL, str(time.time()) + '.' + str(random.random())))


def add_prefix(key, prefix):
    if not prefix:
        return key
    return prefix + key[0:1].upper() + key[1:]

def get_spu_barcode(skuBarcode):
    """
    :return: spu 的barcode
    """
    return skuBarcode[:-4]

def get_skc_barcode(skuBarcode):
    """
    :return: skc 的barcode
    """
    return skuBarcode[:-2]

def get_spu_barcode(skuBarcode):
    """
    :return: skc 的barcode
    """
    return skuBarcode[:-4]

def get_url_param(url, key):
    """
    get url param
    :param url:
    :param key:
    :return:
    """
    from urllib.parse import parse_qs, urlparse
    result = parse_qs(urlparse(url).query).get(key)
    return result.pop() if result else None



def format_state_period(_date, interval='month'):
    if interval == 'week':
        _date = Date(_date).year_week()
    elif interval == 'month':
        _date = Date(_date).strftime('%Y-%m')
    elif interval == 'day':
        _date = Date(_date).format(full=False)
    return _date

def get_full_period(start, end, interval='month'):
    datas = []

    ss = Date(start)
    ee = Date(end)

    if interval == 'month':
        datas.append(ss.strftime('%Y-%m'))
        next = ss.plus_months(1)
        while next.timestamp() < ee.timestamp():
            datas.append(next.strftime('%Y-%m'))
            next = next.plus_months(1)
        datas.append(ee.strftime('%Y-%m'))
    elif interval == 'week':
        datas.append(ss.year_week())
        next = ss.plus_weeks(1)
        while next.timestamp() < ee.timestamp():
            datas.append(next.year_week())
            next = next.plus_weeks(1)
        datas.append(ee.year_week())
    elif interval == 'day':
        datas.append(ss.format(full=False))
        next = ss.plus_days(1)
        while next.timestamp() < ee.timestamp():
            datas.append(next.format(full=False))
            next = next.plus_days(1)
        datas.append(ee.format(full=False))

    if len(datas) > 1:
        last = datas[-1:]
        last_second = datas[-2:-1]
        if last == last_second:
            datas = datas[:-1]

    return datas

# 该方法让value为None的情况下，返回空字符串
def dict_get(dict, key):
    return dict.get(key) if dict.get(key) else ''

class ListToTree:
    def __init__(self, data: iter):
        self.__data = deepcopy(list(data))
        self.__primary_key = 'id'
        self.__parent_key = 'parentId'
        self.__children_key = 'children'
        self.__root_id = None
        self.__leaf_ids = None

    def get_children_tree(self):
        return self.__build().get(self.__children_key, [])

    def get_tree(self):
        return self.__build()

    def set_primary_key(self, primary_key):
        self.__primary_key = primary_key
        return self

    def set_parent_key(self, parent_key):
        self.__parent_key = parent_key
        return self

    def set_children_key(self, children_key):
        self.__children_key = children_key
        return self

    def set_root_id(self, root_id):
        self.__root_id = root_id
        return self

    def set_leaf_ids(self, leaf_ids):
        self.__leaf_ids = leaf_ids
        return self

    def __build(self):
        if self.__leaf_ids is not None and not self.__leaf_ids:
            return {}

        data = self.__data
        # filter leaf nodes, get nodes from leaf up to root
        if self.__leaf_ids:
            data_dict = dict((_['menuId'], _) for _ in data)
            effect_node_ids = set()
            for _node_id in self.__leaf_ids:
                while True:
                    if _node_id in effect_node_ids or _node_id not in data_dict:
                        break
                    effect_node_ids.add(_node_id)
                    _node_id = data_dict.get(_node_id, {}).get(self.__parent_key)
            data = filter(lambda x: x['menuId'] in effect_node_ids, self.__data)
        if not data:
            return {}

        root_node = None
        if self.__root_id:
            for _ in data:
                if _[self.__primary_key] == self.__root_id:
                    root_node = _
            if not root_node:
                return {}

        children_list_assoc = {}
        for _ in data:
            children_list_assoc.setdefault(_[self.__parent_key], []).append(_)
        return self.__recursive(children_list_assoc, root_node)

    def __recursive(self, children_list_assoc, node=None):
        """
        recursive to build tree
        :param children_list_assoc:
        :param node:
        :return:
        """
        if not children_list_assoc:
            return node
        if not node:
            # find root node
            for _ in ['', 0, '0']:
                if _ in children_list_assoc:
                    node = {self.__primary_key: _}
                    break
            if not node:
                raise Exception('not found root node')
        if node[self.__primary_key] not in children_list_assoc:
            return node
        node.setdefault(self.__children_key, [])
        for _ in children_list_assoc.pop(node[self.__primary_key]):
            if _[self.__primary_key] in children_list_assoc:
                node[self.__children_key].append(self.__recursive(children_list_assoc, _))
            else:
                node[self.__children_key].append(_)
        return node


class TreeToList:
    def __init__(self, tree):
        self.__data = deepcopy(tree)
        self.__primary_key = 'id'
        self.__parent_key = 'parentId'
        self.__children_key = 'children'
        self.__generator_id_function = None

    def get_list(self):
        return self.__build()

    def set_primary_key(self, primary_key):
        self.__primary_key = primary_key
        return self

    def set_parent_key(self, parent_key):
        self.__parent_key = parent_key
        return self

    def set_children_key(self, children_key):
        self.__children_key = children_key
        return self

    def set_generator_id_function(self, generator_id_function):
        self.__generator_id_function = generator_id_function
        return self

    def __build(self):
        data = self.__data
        if isinstance(data, dict):
            return self.__recursive([data], data.get(self.__parent_key))
        else:
            return self.__recursive(data)

    def __recursive(self, children: iter, parent_id=None):
        """
        recursive to build list
        :param children:
        :param parent_id:
        :return:
        """
        if not children:
            return []
        data_list = []
        for _ in children:
            if parent_id is not None:
                _[self.__parent_key] = parent_id
            if not _.get(self.__primary_key):
                _[self.__primary_key] = self.__generator_id()
            data_list.append(_)
            if self.__children_key in _:
                _children = _.pop(self.__children_key)
                data_list.extend(self.__recursive(_children, _[self.__primary_key]))
        return data_list

    def __generator_id(self):
        if self.__generator_id_function:
            return self.__generator_id_function()
        return generator_random_id()


class ListMergeToDict:
    CONST_DEFAULT_KEY = ''
    """
    把list 合并成dict
    :return: target_dict{v1:{k2:v2, k3:v3+v33}}
    """

    def __init__(self, source_list: iter, primary_keys: iter):
        """
        :param list source_list: [{k1:v1, k2:v2, k3:v3},{k1:v1, k2:v2, k3:v33}] 源列表
        :param list primary_keys: ['k1'] or None 生成主键的key
        """
        self.__source_list = source_list
        self.__primary_keys = primary_keys
        self.__retain_keys = None
        self.__sum_keys = None
        self.__min_keys = None
        self.__max_keys = None


    def set_retain_keys(self, keys):
        """
        设置 保留的key
        :param keys:
        :return:
        """
        self.__retain_keys = keys
        return self

    def set_sum_keys(self, keys):
        """
        设置 求和的key
        :param keys:
        :return:
        """
        self.__sum_keys = keys
        return self

    def set_min_keys(self, keys):
        """
        设置 求最小 0不参与
        :param keys:
        :return:
        """
        self.__min_keys = keys
        return self

    def set_max_keys(self, keys):
        """
        设置 求最大 默认0
        :param keys:
        :return:
        """
        self.__max_keys = keys
        return self

    def __get_key_value(self, keys):
        """
        get key value
        :param keys:
        :return:
        """
        if isinstance(keys, dict):
            for _key, _value in keys.items():
                yield _key, _value
        else:
            for _key in keys:
                if isinstance(_key, tuple):
                    yield _key[0], _key[1]
                else:
                    yield _key, _key


def change_date(date_type, start, end):
    """
     根据date_type 修改start end
    :param date_type:
    :param start:
    :param end:
    :return:
    """
    if date_type == 'week':
        return Date(start).to_week_start().format(full=False), Date(end).to_week_end().format(full=False)
    elif date_type == 'month':
        return Date(start).to_month_start().format(full=False), Date(end).to_month_end().format(full=False)
    else:
        return start, end


def md5string(s):
    """
    字符串md5
    :param s:
    :return:
    """
    return hashlib.md5(str(s).encode('utf-8')).hexdigest()
