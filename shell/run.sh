#!/bin/sh
export PYTHONPATH=/root/silin/blog_flask
cd /root/silin/blog_flask
./venv/bin/python cron/cron.py $@
