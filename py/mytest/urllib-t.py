#!/usr/bin/python
#coding=utf-8
import urllib
import urllib2
import requests
import re
import time
import random

url1 = 'http://pr.myav.tv/zh-TW/Actress/Index/930'
url11= 'http://pr.myav.tv/zh-TW/Home/Index'
url2 = 'http://news.163.com'
url3 = 'http://news.163.com/rank/'
url4 = 'http://tieba.baidu.com/p/2460150866'
urlerror = "http://www.runoob.com/111"


def getHtml(url):
    page = urllib.urlopen(url)
    html = page.read()
    return html

def findImg(content):
    reg = r'src="(.+?\.jpg)"'
    imgre = re.compile(reg)
    imglist = re.findall(imgre, content)
    return imglist

def getFileContent(path):
    readfile = open(path, 'r+')
    content = readfile.read()
    readfile.close()
    return content

def saveFile(path, content):
    writefile = open(path, 'a+')
    writefile.write(content)
    writefile.close()

def getHttpHead():
    head_connection = ['Keep-Alive','close']
    head_accept = ['text/html, application/xhtml+xml, */*']
    head_accept_language = ['zh-CN,fr-FR;q=0.5','en-US,en;q=0.8,zh-Hans-CN;q=0.5,zh-Hans;q=0.3']
    head_user_agent = ['Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko',
                       'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36',
                       'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; rv:11.0) like Gecko)',
                       'Mozilla/5.0 (Windows; U; Windows NT 5.2) Gecko/2008070208 Firefox/3.0.1',
                       'Mozilla/5.0 (Windows; U; Windows NT 5.1) Gecko/20070309 Firefox/2.0.0.3',
                       'Mozilla/5.0 (Windows; U; Windows NT 5.1) Gecko/20070803 Firefox/1.5.0.12',
                       'Opera/9.27 (Windows NT 5.2; U; zh-cn)',
                       'Mozilla/5.0 (Macintosh; PPC Mac OS X; U; en) Opera 8.0',
                       'Opera/8.0 (Macintosh; PPC Mac OS X; U; en)',
                       'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080219 Firefox/2.0.0.12 Navigator/9.0.0.6',
                       'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Win64; x64; Trident/4.0)',
                       'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)',
                       'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E)',
                       'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Maxthon/4.0.6.2000 Chrome/26.0.1410.43 Safari/537.1 ',
                       'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; InfoPath.2; .NET4.0C; .NET4.0E; QQBrowser/7.3.9825.400)',
                       'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0 ',
                       'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.92 Safari/537.1 LBBROWSER',
                       'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; BIDUBrowser 2.x)',
                       'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/536.11 (KHTML, like Gecko) Chrome/20.0.1132.11 TaoBrowser/3.0 Safari/536.11']

    header = {
        'Connection': head_connection[0],
        'Accept': head_accept[0],
        'Accept-Language': head_accept_language[0],
        'User-Agent': head_user_agent[random.randrange(0,len(head_user_agent))]
    }
    return header

def downUrlTo(url, path):
    req = urllib2.Request(url, headers = getHttpHead() )  
    imgfile = urllib2.urlopen(req, None, 5)
    rImg = imgfile.read()
    imgfile.close()
    wf = open(path, 'wb')
    wf.write(rImg)
    wf.close()
    print "Start : %s" % time.ctime()
    time.sleep(1)
    print "End : %s" % time.ctime()

def useProxy():
  proxyhandler = urllib2.ProxyHandler({"https":"http://wuyhbzh:123456@b.twgjsq.pw"})
  opener = urllib2.build_opener(proxyhandler)
  urllib2.install_opener(opener)

def main():
    content = getHtml(url1)
    # content = getFileContent('test.html')
    saveFile('url1.html', content)

    imglist = findImg(content)
    imgstr  = ""
    imgname = ""
    for imgurl in imglist:
        imgname = imgurl[imgurl.rfind("/") + 1:]
        print imgname
        downUrlTo(imgurl, "imglist/" + imgname)
        imgstr = imgstr + imgurl + '\n'
        

    saveFile('imgurl.txt', imgstr)

main()

img1 = 'http://imgsrc.baidu.com/forum/w%3D580/sign=294db374d462853592e0d229a0ee76f2/e732c895d143ad4b630e8f4683025aafa40f0611.jpg'
img2 = 'http://img2016.myav.tv/content/images/stills/80/201608/200613/200613_ch.jpg'
img3 = 'http://mvimg2.meitudata.com/55b1c9466bc832244.jpg'

img11 = 'http://img2016.myav.tv/content/images/stills/13/201611/204627/204627_ch.jpg'
img12 = 'http://img2016.myav.tv/content/images/stills/13/201610/203681/203681_ch.jpg'
img13 = 'http://img2016.myav.tv/content/images/stills/13/201610/203344/203344_ch.jpg'
img14 = 'http://img2016.myav.tv/content/images/stills/80/201610/202753/202753_ch.jpg'
img15 = 'http://img2016.myav.tv/content/images/stills/13/201609/202137/202137_ch.jpg'
img16 = 'http://img2016.myav.tv/content/images/stills/80/201609/202019/202019_ch.jpg'
img17 = 'http://img2016.myav.tv/content/images/stills/80/201609/201781/201781_ch.jpg'
img18 = 'http://img2016.myav.tv/content/images/stills/13/201609/201231/201231_ch.jpg'
img19 = 'http://img2016.myav.tv/content/images/stills/13/201608/200971/200971_ch.jpg'
img10 = 'http://img2016.myav.tv/content/images/stills/80/201608/200613/200613_ch.jpg'

# import traceback

# def loopduown():
#   try:
#     downUrlTo(img10, 'img10.jpg')
#   except Exception,e:
#     loopduown()

# try:
#   downUrlTo(img10, 'img10.jpg')
# except Exception,e:
#   loopduown()

# useProxy()

# downUrlTo(img10, 'img10.jpg')

