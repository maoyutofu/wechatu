#!/usr/bin/env python
# coding: utf-8

import os
import time

print '安装WeChatU到你的Linux系统'
print '正在初始化安装'
cwd = os.getcwd() + '/'

desktop = '/usr/share/applications/wechatu.desktop'

tpl = 'wechatu.desktop'
f = open(tpl, 'r')
conf_str = f.read()
f.close()
conf_str = conf_str.format(cwd, cwd)

print '正在装载配置，请等待'
if not os.path.exists(desktop):
    d = open(desktop, 'w+') 
    d.write(conf_str)
    d.close()
    time.sleep(3)
    print '安装完成，欢迎使用WeChatU（WeChat for Linux）'
else:
    print '检测到你已安装过WeChatU，升级请手动删除' + desktop
