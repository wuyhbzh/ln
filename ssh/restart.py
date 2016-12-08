#-*- coding: utf-8 -*-
#!/usr/bin/python 
# if nod found paramiko , cmd pip install paramiko
import paramiko
import threading

def ssh2(ip,port,username,passwd,cmd):
    try:
        ssh = paramiko.SSHClient()
        ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
        ssh.connect(ip,port,username,passwd,timeout=5)
        for m in cmd:
            stdin, stdout, stderr = ssh.exec_command(m)
            # stdin.write("Y")   #简单交互，输入 ‘Y’ 
            out = stdout.readlines()
            #屏幕输出
            for o in out:
                print(o),
        print('%s\tOK\n'%(ip)) 
        ssh.close()
    except :
        print('%s\tError\n'%(ip))


if __name__=='__main__':
    # cmd = ['cal','echo hello!', 'ls']#你要执行的命令列表
    cmd = ['./restartJNGouji.sh']
    # cmd = ['ps -ef|grep JNGouji']
    username = "WoodWu"  #用户名
    passwd = "wu03.com"    #密码
    threads = []   #多线程
    print("Begin......")
    ip = '192.168.202.25'
    port = 3600
    a=threading.Thread(target=ssh2,args=(ip,port,username,passwd,cmd))

    a.start() 

    # for i in range(1,254):
    #     ip = '192.168.1.'+str(i)
    #     a=threading.Thread(target=ssh2,args=(ip,username,passwd,cmd))

    #     a.start() 