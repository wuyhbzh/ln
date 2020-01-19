var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(request.url);

	 //定义了一个post变量，用于暂存请求体的信息
	var post = '';    
	//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    request.on('data', function(chunk){    
        post += chunk;
    });

    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    request.on('end', function(){
        post = querystring.parse(post);
        response.end(util.inspect(post));
    });

	// response.end(util.inspect(url.parse(request.url, true)));

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');