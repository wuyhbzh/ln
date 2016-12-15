var express = require('express');
var gdb = require('../public/js/gdb')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	gdb.getUsers(function(data){
		console.log(data.name);
		res.send('get ' + data.name);
	});
});

module.exports = router;
