# -*- coding: utf-8 -*-
import paramiko

    
if __name__ == "__main__":  
    hostname = '112.74.39.169'  
    port = 22  
    username = 'root'  
    password = '6YCa@8pxb1P#nVw#'  
    cmd = "./restart-all.sh"  

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    #ssh.connect( hostname ,22, username , password )
    ssh.connect(hostname,username=username,password=password,allow_agent=False,look_for_keys=False)
    stdin, stdout, stderr = ssh.exec_command(cmd )

    # stdin.write('%s\r\n' % password)
    # stdin.flush()
    print ''.join( stdout.readlines() )
    print ''.join( stderr.readlines() )
    
    ssh.close()