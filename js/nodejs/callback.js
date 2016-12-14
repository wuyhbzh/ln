var fs = require("fs");


console.log("阻塞读取文件开始");
var data = fs.readFileSync('callback.js');
// console.log(data.toString());
console.log("阻塞读取文件完成");
console.log();



function callback(err, data){
	if (err) return console.error(err);
	// console.log(data.toString());
	console.log("非阻塞读取文件完成")
}
var data = fs.readFile('testHttp.js', callback);
console.log("非阻塞读取文件开始");

