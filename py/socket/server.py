import socket
import time
import threading

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind(('127.0.0.1', 9999))

s.listen(5)

print('Waiting for connection...')

def tcplink(sock, addr):
	print('Accept new connection from 1 %s:%s...' % addr)
	sock.send(b'Welcom!')
	print('Accept new connection from 2 %s:%s...' % addr)

	while True:
		print("wait recv 1")
		data = sock.recv(1024)
		print("wait recv 2")
		time.sleep(1)
		if not data or data.decode('utf-8') == 'exit':
			break
		sock.send(('Hello, %s!' % data.decode('utf-8')).encode('utf-8'))
	sock.close()
	print('Connection from %s:%s closed.' % addr)

while True:
	print("run 1")
	sock, addr = s.accept()
	print("run 2")
	t = threading.Thread(target=tcplink, args=(sock, addr))
	t.start()


