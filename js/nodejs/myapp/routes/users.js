var express = require('express');
// var gdb = require('../public/js/gdb')
// var mdb = require('../public/js/mdb')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

	res.send('users get ' + req.url);
	console.log('users get ');

	// gdb.getUsers(function(data){
	// 	console.log(data.name);
	// 	res.send('get ' + data.name);
	// });

});

router.get('/:name?', function(req, res, next){
	console.log('users get baba ' + req.params.name);
	res.send('users get baba ' + req.url);

})

module.exports = router;
