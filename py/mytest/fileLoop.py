import os, codecs, re
import os.path

#删除target下的文件

rootdir = "d:\\work\\arts\\res\\ui"
target = "d:\\work\\client\\trunk-cr\\cocosstudio"

outlog = "d:\\work\\arts\\res\\png.log"

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
            if os.path.isfile(rootpath):
                os.remove(rootpath)
                print "remove : " + rootpath
            
            fs.write(filename + "\n")
            
fs.close()