// https://www.runoob.com/mongodb/mongodb-window-install.html window安装

var MongoClient = require('mongodb').MongoClient;
// can't find mongodb module
// 环境变量 NODE_PATH = "C:\Users\Administrator\AppData\Roaming\npm\node_modules;C:\Users\Administrator\node_modules"
var DB_CONN_STR = 'mongodb://115.159.45.241:27017/sofe'; //# 数据库为 runoob
 
var insertData = function(db, callback) {  
    //连接到表 site
    var collection = db.collection('site');
    //插入数据
    var data = [{"name":"wyh","desc":"搬砖工"}, {"name":"zhw","desc":"搬砖工"}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}
 
MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});