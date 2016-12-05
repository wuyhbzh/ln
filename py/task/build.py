import shutil, os

gamespath = "hall/games/"

def log(str):
    print(str)

#创建自命名文件夹，复制代码过去,如同名删除在创建
def renewDir(dirname):
    if os.path.exists(dirname) == True:
        print(path + " is exists,  delete yes/no")
        if input() == "yes":
            shutil.rmtree(dirname)
            log("delete success")

    if os.path.exists(dirname):
        log(dirname + " is exists, build fail")
    else:
        log(dirname + " is build success")
        shutil.copytree('temple', gamespath + dirname)

def inputGameDirName():
    log("input game dir name:")
    dirname = input()
    renewDir(dirname)

def main():
    inputGameDirName()

if __name__ == '__main__':
    main();