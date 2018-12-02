from flask import Blueprint

# 蓝图的基本概念是：在蓝图被注册到应用之后，所要执行的操作的集合。当分配请求 时， Flask 会把蓝图和视图函数关联起来，并生成两个端点之前的 URL 。
demo = Blueprint('demo', __name__, url_prefix='/demo')


@demo.route('/user/<username>')
def show_user_profile(username):
    """
    string	（缺省值） 接受任何不包含斜杠的文本
    int	接受正整数
    float	接受正浮点数
    path	类似 string ，但可以包含斜杠
    uuid	接受 UUID 字符串
    """
    # show the user profile for that user
    return 'User %s' % username


@demo.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return 'Post %d' % post_id


@demo.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return 'Subpath %s' % subpath
