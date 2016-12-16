var express = require('express');
var gdb = require('../public/js/gdb')
// var mdb = require('../public/js/mdb')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	res.send('get ' + req);

	// gdb.getUsers(function(data){
	// 	console.log(data.name);
	// 	res.send('get ' + data.name);
	// });

});

router.get('/:name?', function(req, res, next){
	console.log(req.params.name);
})

module.exports = router;
