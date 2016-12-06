#!/usr/bin/python
#coding=utf-8

import shutil, os, sys, re

isPython35 = int(sys.version[0]) > 2
gamespath = 'GameServer/bin/quickX/games'
temppath = 'GameServer/bin/quickX/games/template'
allocserver_path = 'AllocServer'
gameserver_path = 'GameServer'


def _input(str):
    if isPython35 == True:
        return input(str)
    else:
        return raw_input(str)

# 只找到key则 返回 true
# 如能找到key的value 返回 value
# 否则返回None
def getArgvValue(argvKey):
    argvKeyIndex = 0
    argvValueIndex = 0
    argvValue = None
    argvValueTemp = '-'

    if argvKey in sys.argv:
        argvKeyIndex = sys.argv.index(argvKey)
        argvValueIndex = argvKeyIndex + 1

    if argvKeyIndex>0:
        argvValue = True
    
    if argvValueIndex < len(sys.argv) and len(sys.argv) > 1 and argvValueIndex>0:
        argvValueTemp = sys.argv[argvValueIndex]
    
    if argvValueTemp[0] != '-':
        argvValue = argvValueTemp

    return argvValue



def log(*str):
    print(*str)


def logVersion():
    log('python versin ' + sys.version[0:3])

# 创建自命名文件夹，复制代码过去,如同名删除在创建
def copyGameDir(dirname, force):
    buildpath = gamespath + '/' + dirname
    if os.path.exists(buildpath) == True:
        if force == True:
            shutil.rmtree(buildpath)
        else:
            log('\ndir ' + buildpath + ' is exists')
            inputstr = _input('yes to delete/no to update conf, yes/no:')
            if inputstr == 'yes' or inputstr == 'y':
                shutil.rmtree(buildpath)
                log('delete success')

    if os.path.exists(buildpath):
        log(buildpath + " is exists, build fail")
    else:
        log(buildpath + " is build success")
        shutil.copytree(temppath, buildpath)



##输入游戏名python build.py -p BaoHuang -i 902 -n 5
def inputStrIfNone(inputStr, strName):
    if inputStr == None:
        inputStr = _input('please input ' + strName + ':')
    return inputStr;


# modifList元素[0] 文件路径
# modifList元素[1] 正则规则 
# modifList元素[2] 替换内容
def modifyFileData(modifList):
    for item in modifList:
        filePath = item[0]
        allcFile = open(filePath, "r")
        data = allcFile.read()
        allcFile.close()
        data = re.sub(item[1], item[2], data)
        log('modifyFileData ', filePath, item[2])
        allcFile = open(filePath, "w")
        allcFile.write(data)
        allcFile.close()


# 模糊查找文件夹下的文件， 返回文件名
def getFileByDimName(dirPath, dimName):
    dirList = os.listdir(dirPath)
    searchName = None
    for fileName in dirList:
        searchName = re.search('Alloc[a-zA-Z]+', fileName, flags=0)
        if searchName != None:
            break

    if searchName == None:
        return None
    else:
        return searchName.group()

# 重命名文件名
# fileDirPath 文件夹路径
# fileList元素[0] 模糊查找文件名
# fileList元素[1] 新文件名
def reNameFile(fileDirPath, fileList):
    for item in fileList:
        fileDimName = item[0]
        newFileName = item[1]
        targetFileName = getFileByDimName(fileDirPath, fileDimName)
        targetFilePath = fileDirPath + '/' + targetFileName
        newFilePath = fileDirPath + '/' + newFileName
        if os.path.exists(targetFilePath) and os.path.exists(newFilePath) and targetFilePath != newFilePath:
            os.remove(newFilePath)

        if targetFileName != None:
            os.rename(targetFilePath, newFilePath)
            log('reNameFile', targetFilePath, newFileName + ' -> ' + targetFileName)

def updateConf(dirName, gameId, userCount):
    allocConfPath = allocserver_path + '/conf/Server.ini'
    allocStartShPath = allocserver_path + '/bin/start.sh'
    
    gameConfPath = gameserver_path + '/conf/Server.ini'
    gameReStartShPath = gameserver_path + '/bin/restart.sh'
    gameStartShPath = gameserver_path + '/bin/start.sh'

    
    allocConfModifyData = [
        [allocConfPath, 'GameId=[1-9][0-9]+', 'GameId='+str(gameId)],
        [allocConfPath, 'logFile=[a-zA-Z]+Alloc', 'logFile='+dirName+'Alloc'],
        [allocConfPath, 'MaxUserCount=[1-9][0-9]{0,1}', 'MaxUserCount='+str(userCount)],
        [allocStartShPath, 'Alloc[a-zA-Z]+', 'Alloc' + dirName],
        [gameConfPath, 'GameId=[1-9][0-9]+', 'GameId='+str(gameId)],
        [gameConfPath, 'logFile=[a-zA-Z]+Game', 'logFile='+dirName+'Game'],
        [gameConfPath, 'sid=[1-9][0-9]+', 'sid='+str(gameId)],
        [gameReStartShPath, '[a-zA-Z]+GameSer', dirName + 'GameSer'],
        [gameStartShPath, '[a-zA-Z]+GameSer', dirName + 'GameSer'],
    ]
    modifyFileData(allocConfModifyData)

    allocServerBinDir = allocserver_path + '/bin'
    allocServerBinList = [
        ['Alloc' , 'Alloc' + dirName],
    ]
    reNameFile(allocServerBinDir, allocServerBinList)

def main():
    logVersion()
    dirName = getArgvValue('-dir')
    gameId = getArgvValue('-id')
    userNum = getArgvValue('-num')
    force = getArgvValue('-f')
    justUpdateConf = getArgvValue('-u')

    # log(dirName, gameId, userNum, force, justUpdateConf)

    dirName = inputStrIfNone(dirName, 'dirname')
    gameId = inputStrIfNone(gameId, 'gameId')
    userNum = inputStrIfNone(userNum, 'userNum')

    if justUpdateConf == True:
        log('just update conf')
    else:
        log('start copy dir ')
        copyGameDir(dirName, force)

    updateConf(dirName, gameId, userNum)

if __name__ == '__main__':
    main();