import os, shutil

publish_dir = "publish"
proj_dir = "hall"
games_path = "hall/games/"

def log(str):
    print(str)

def getGamesDir():
    dirlist = os.listdir(games_path)
    index = 0
    print(dirlist)
    for dirname in dirlist:
        log("%d %s" % (index, dirname))
        index+=1

    log("input game folder index")

    nHitIndex = int(input())
    if nHitIndex < len(dirlist):
        log(dirlist[nHitIndex])
        return dirlist[nHitIndex]
    else:
    	log("you boom bala bala")
    	return None

#创建自命名文件夹，复制代码过去,如同名删除在创建
def renewDir(proj_dir, publish_path):
    if os.path.exists(publish_path) == True:
        print(publish_path + " is exists,  delete yes/no")
        if input() == "yes":
            shutil.rmtree(publish_path)
            log("delete success")

    if os.path.exists(publish_path):
        log(publish_path + " is exists, publish fail")
    else:
        log(publish_path + " is publish success")
        shutil.copytree(proj_dir, publish_path)

def publishGame(gameDirName):
    if not os.path.exists(publish_dir):
    	os.mkdir(publish_dir)
    
    gameSerDir = gameDirName + "Server"

    if os.path.exists(gameSerDir):
        os.remove(gameSerDir)

    publish_path = publish_dir + "/" + gameSerDir + "/" + proj_dir
    dirlist = os.listdir(proj_dir)

    renewDir(proj_dir, publish_path)
    # if os.path.exists(publish_path) == True:
    # shutil.copytree(proj_dir, publish_path)


def main():
    gamedir = getGamesDir()
    publishGame(gamedir)

if __name__ == '__main__':
    main()