from flask import Blueprint, jsonify, Response

from model.image.image import Image

images = Blueprint('images', __name__, url_prefix='/images')


@images.route('/waka/<date>')
def get_waka_image(date):
    file = Image('waka/%s.jpeg' % date).get_file()
    # _, ext = os.path.splitext(path)
    # print(_,ext)
    if file:
        return Response(file, mimetype="image/jpeg")
    else:
        return jsonify()
