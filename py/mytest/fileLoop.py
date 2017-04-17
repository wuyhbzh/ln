#coding=utf-8
import os, codecs, re
import os.path

#删除target下的文件
rootdir = "d:\\work\\arts\\res\\ui"
target = "d:\\work\\client\\trunk-cr\\cocosstudio"


outlog = "d:\\work\\arts\\res\\png.log"

#parent     当前目录
#dirnames   当前目录下的所有文件夹
#filenames  当前目录下的所有文件
def removePng():
    fs = codecs.open(outlog, "w")

    for parent,dirnames,filenames in os.walk(rootdir):
        print "parent : " + parent
        # print filenames
        # for dirname in  dirnames:
        #     print "parent  : " + parent
        #     print "  dirname : " + dirname
        #     print filenames

        for filename in filenames:
            if filename.find('.png')!=-1:
                rootpath = os.path.join(parent,filename)
                rootpath = rootpath.replace(rootdir, target)
                # if os.path.isfile(rootpath):
                #     os.remove(rootpath)
                #     print "remove : " + rootpath
                fs.write(rootpath + "\n")
    fs.close()


ccsPath = "D:\\work\\client\\trunk-cr\\Galoshes.ccs"

# 删除css的png
def deleteCssPng():
    infs = codecs.open(ccsPath, "r")
    outfs = codecs.open(ccsPath+'1', 'w')

    for lint in infs:
        re.compile('\"*.png\"')
        outfs.writelines(lint)
        print lint

    infs.close()
    outfs.close()

deleteCssPng()