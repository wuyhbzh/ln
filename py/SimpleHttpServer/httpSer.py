import SimpleHTTPServer 
import SocketServer 
import cgi 
 
ip = '127.0.0.1'
PORT = 8000 
 
class ServerHandler(SimpleHTTPServer.SimpleHTTPRequestHandler): 
 
    def do_GET(self): 
        print('hi')
        self.wfile.write("hi")
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self) 
 
    def do_POST(self): 
        form = cgi.FieldStorage() 
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self) 
 
Handler = ServerHandler 
 
httpd = SocketServer.TCPServer((ip, PORT), Handler) 
 
print("serving at port", PORT)
httpd.serve_forever() 
