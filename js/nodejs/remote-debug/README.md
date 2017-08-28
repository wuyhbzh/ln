
http://www.cnblogs.com/tzyy/p/5028348.html
npm install -g node-inspector

调试模式运行node工程
node --debug=10086 app.js

开启调试服务器
node-inspector --web-port 8801 --debug-port 10086

浏览器访问 127.0.0.1:8801/?port=10086