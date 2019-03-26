#!/bin/sh
DEPLOY_PATH=/root/silin/blog_flask/
unset GIT_DIR
cd $DEPLOY_PATH
git reset --hard
git pull
source venv/bin/activate
export PYTHONPATH=`pwd`
pip install --upgrade pip
pip3 install -r requirements.txt
ps -ef|grep gunicorn|awk '{print $2}'|head -1|xargs kill -9
gunicorn run:app  -c gunicorn.conf.py -D
