import SimpleHTTPServer 
import SocketServer 
import cgi 
 
ip = '127.0.0.1'
PORT = 8000 
 
class ServerHandler(SimpleHTTPServer.SimpleHTTPRequestHandler): 
 
    def do_GET(self): 
        print('do_GET')
        print(self.raw_requestline)
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_GET(self) 
        # self.wfile.write("<p>hi</p>")
 
    def do_POST(self): 
        form = cgi.FieldStorage() 
        print('do_GET')
        SimpleHTTPServer.SimpleHTTPRequestHandler.do_POST(self) 
 
Handler = ServerHandler 
 
httpd = SocketServer.TCPServer((ip, PORT), Handler) 
 
print("serving at port", PORT)
httpd.serve_forever() 
