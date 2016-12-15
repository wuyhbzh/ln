//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '115.159.45.241',
    user: 'gamebzh',
    password: '2889372',
    database:'gamebzh'
});

connection.connect();
//查询
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});
//关闭连接
connection.end();