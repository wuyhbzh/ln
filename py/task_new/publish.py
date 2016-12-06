#!/usr/bin/python
#coding=utf-8

import shutil, os, sys

isPython35 = int(sys.version[0]) > 2
publish_dir = "publish"
gameserver_dir = "GameServer"
allocserver_dir = "AllocServer"
games_path = "GameServer/bin/quickX/games"


def _input(str):
    if isPython35 == True:
        return input(str)
    else:
        return raw_input(str)

def getArgvValue(argvKey):
    argvKeyIndex = 0
    argvValueIndex = 0
    if argvKey in sys.argv:
        argvKeyIndex = sys.argv.index(argvKey)
        argvValueIndex = argvKeyIndex + 1

    if argvValueIndex < len(sys.argv) and len(sys.argv) > 1:
        return sys.argv[argvValueIndex]
    else:
        return None


def log(str):
    print(str)

def logVersion():
    log('python versin ' + sys.version[0:3])

def getGamesDir():
    dirlist = os.listdir(games_path)
    index = 0
    for dirname in dirlist:
        log("%d %s" % (index, dirname))
        index+=1

    nHitIndex = int(_input('input game folder index to publish:'))
    if nHitIndex < len(dirlist):
        log(dirlist[nHitIndex])
        return dirlist[nHitIndex]
    else:
    	log("you boom bala bala")
    	return None


# 创建自命名文件夹，复制代码过去,如同名删除在创建
def copyDirTo(proj_dir, publish_path):
    if os.path.exists(publish_path) == True:
        shutil.rmtree(publish_path)
        # inputstr = _input(publish_path + ' is exists,  delete yes/no:')
        # if inputstr == 'yes' or inputstr == 'y':
        #     shutil.rmtree(publish_path)
        #     log('delete success')

    if os.path.exists(publish_path):
        log(publish_path + ' is exists, publish fail')
    else:
        log(publish_path + ' is publish success')
        shutil.copytree(proj_dir, publish_path)

def publishGame(gameDirName):
    if not os.path.exists(publish_dir):
        os.mkdir(publish_dir)

    gameSerDir = gameDirName + 'Server'

    if os.path.exists(gameSerDir):
        os.remove(gameSerDir)

    publish_path = publish_dir + '/' + gameSerDir
    publish_allocserver_path = publish_path + '/' + allocserver_dir
    publish_gameserver_path = publish_path + '/' + gameserver_dir
    publish_game_path = publish_path + '/' + games_path

    # 拷贝AllocServer
    copyDirTo(allocserver_dir, publish_allocserver_path)
    # 拷贝GameServer
    copyDirTo(gameserver_dir, publish_gameserver_path)
    # 删除其他子游戏
    dirlist = os.listdir(publish_game_path)
    for dirname in dirlist:
        if dirname != gameDirName and dirname != 'common':
            shutil.rmtree(publish_game_path + '/' + dirname)


def isGameDirExists(gamedir):
    dirlist = os.listdir(games_path)
    if gamedir and not gamedir in dirlist:
        log('error: not folder ' + gamedir)
        return False
    else:
        return True

def getGameDirName():
    gamedir = getArgvValue('-dir')
    if not isGameDirExists(gamedir):
        gamedir = None
    if gamedir == None:
        gamedir = getGamesDir()
    return gamedir


def main():
    logVersion()
    gamedir = getGameDirName()
    publishGame(gamedir)

if __name__ == '__main__':
    main()