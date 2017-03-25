#coding=utf-8

import os, codecs
dirlist = os.listdir("./")

fs = codecs.open(u"替换表.js", "w")
fs.write("{\n")
for dir in dirlist:
    if os.path.isfile(dir):
        print(dir)
        fs.write('"' + dir.decode("gbk").encode('utf-8') + '" = ""\n')
fs.write("}\n")
fs.close()
        
