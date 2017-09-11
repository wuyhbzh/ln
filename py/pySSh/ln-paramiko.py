# -*- coding: utf-8 -*-

import paramiko
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('112.74.39.169', username = 'root', password = '6YCa@8pxb1P#nVw#', timeout = 5)
cmd = 'cd game-server;./start.sh;ls'

password= 'P@ssw0rd'

stdin, stdout, stderr = ssh.exec_command( cmd )
# stdin, stdout, stderr = ssh.exec_command('sudo -S %s\n' % cmd )
##stdin.write('%s\r\n' % password)
##stdin.flush()
print "------------------------"
print ''.join( stdout.readlines() )
##print stderr.read() 


print "------------------------"
# cmd = 'pwd'
# stdin, stdout, stderr = ssh.exec_command(cmd )
# print stdout.readlines() 

ssh.close()