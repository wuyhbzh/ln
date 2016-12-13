import sys

isPython35 = int(sys.version[0]) > 2

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