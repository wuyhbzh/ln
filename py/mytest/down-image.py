#!/usr/bin/python
#coding=utf-8
import urllib
import re
import os

'''
down image to img
'''
def getHtml(url):
    page = urllib.urlopen(url)
    html = page.read()
    return html

dirName = 'img1'

def getImg(html):
    if not os.path.exists(dirName):
        os.mkdir(dirName)

    reg = r'src="(.+?\.jpg)" pic_ext'
    imgre = re.compile(reg)
    imglist = re.findall(imgre,html)
    x = 0
    for imgurl in imglist:
    	print imgurl
        # urllib.urlretrieve(imgurl, dirName+'/%s.jpg' % x)
        x+=1

# html = getHtml("http://www.xiumm.cc/")
# print html
html = getHtml("http://tieba.baidu.com/p/2460150866")
getImg(html)