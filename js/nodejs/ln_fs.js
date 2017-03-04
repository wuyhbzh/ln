"use strict";
var fs = require("fs");

var wfs = fs.createWriteStream('js/nodejs/test.js', 'utf-8');
wfs.on('data', function(chunk){
    console.log('wfs DATA:');
    console.log(chunk);
});
wfs.on('end', function(){
    console.log('wfs END')
});
wfs.on('error', function(err){
    console.log('wfs ERROR:' + err);
});
wfs.write("// 测试写文件 from ln_fs.js")
wfs.end();


var rfs = fs.createReadStream("js/nodejs/test.js", "utf-8");
rfs.on("data", function(chunk){
    console.log("rfs DATA:");
    console.log(chunk);
});
rfs.on("end", function(){
    console.log("rfs END");
});
rfs.on("error", function(err){
    console.log("rfs ERROR:" + err);
})
console.log(rfs.read());
