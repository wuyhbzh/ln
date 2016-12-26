#coding=utf-8
import socket
import time
import threading


host = '127.0.0.1'
port = 9999

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
print('socket build')

s.bind((host, port))
print('socket bind')

s.listen(5)
print('socket listen')

def tcplink(sock, addr):
	print('connection from %s:%s' % addr)

	# 发送二进制数据到 addr
	sock.send(b'welcome! exit to close')
	print('send Welcome to %s:%s' % addr)

	while True:
		data = sock.recv(1024)
		print(data)
		time.sleep(1)
		if not data or data.decode('utf-8') == 'exit':
			break
		sock.send(data)

	sock.close()
	print('connection from %s:%s closed.' % addr)

while True:
	print("\nsocket accept begin...")
	sock, addr = s.accept()
	print("socket accept something")
	t = threading.Thread(target=tcplink, args=(sock, addr))
	t.start()


