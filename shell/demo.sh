#!/bin/bash
proc_name="shadowsocks"                             # 待监控进程名

number=`ps -ef | grep $proc_name | grep -v grep | wc -l`

if [ $number -eq 0 ]                             # 判断进程是否存在
then
        ssserver -c /etc/shadowsocks.json -d start              # 重启进程的命令，请相应修改
fi