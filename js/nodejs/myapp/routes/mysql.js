var express = require('express');
var mysql      = require('mysql');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	var connection = mysql.createConnection({
	  host     : '115.159.45.241',
	  user     : 'gamebzh',
	  password : '2889372',
	  database : 'gamebzh',
	  port     : '3306',
	});

	connection.connect();

	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	  if (err) throw err;
	  console.log('The solution is: ', rows[0].solution);
	});


	connection.query("SELECT * FROM `user` WHERE 1", function(err, rows, fields) {
		if(err) throw err;
		console.log('select: ', rows);
	});

	connection.end();


  	res.send('respond with a resource');
});

module.exports = router;




