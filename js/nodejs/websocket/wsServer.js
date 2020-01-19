// npm isntall -g nodejs-websocket
var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    conn.on('text', function (str) {
    })

    conn.on("close", function (code, reason) {
        console.log("关闭连接");
    })
    conn.on("error", function (code, reason) {
        console.log("异常关闭");
    });
}).listen(8082);
console.log("websocket连接完毕")