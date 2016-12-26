#coding=utf-8
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# 建立连接:
s.connect(('127.0.0.1', 9999))

while True:
	print('recv:'+s.recv(1024).decode('utf-8'))
	data = raw_input('send:')
	s.send(data)
	if data == 'exit':
		break;

print('socket close');
s.close()
