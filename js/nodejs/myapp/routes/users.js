var express = require('express');
var url = require('url');
var router = express.Router();
// var gdb = require('../public/js/gdb')
// var mdb = require('../public/js/mdb')

/* GET users listing. */
router.get('/', function(req, res, next) {

	// res.send('users get ' + req.url);
	console.log('users get');

	// gdb.getUsers(function(data){
	// 	console.log(data.name);
	// 	res.send('get ' + data.name);
	// });
	next();

});

router.get('/', function(req, res, next) {

	res.send('showall sign logic');
	console.log('users get 1');

});


router.get('/sign', function(req, res, next){
	var urlJson= url.parse(req.url, true);
	var param = urlJson.query;
	console.log(param);

	gdb.findUser(param, function(data){
		if (data) {
			// console.log('sign user success');
			res.send('sign user success')
		}else{
			// console.log('sign user faile');
			res.send('sign user faile');
		}
	});

})

router.get('/logic', function(req, res, next) {
	var urlJson= url.parse(req.url, true);
	var param = urlJson.query;
	console.log(param);
	console.log('logic ' + param.name + param.pass);

	gdb.addUser(param, function(data){
		if (data) {
			res.send('findall user success');
		}else{
			res.send('can not findall user');
		}
	});
});

router.get('/showall', function(req, res, next){
	gdb.showAll(function(data){
		if(data){
			res.send(data);
		}else{
			res.send('showall faile');
		}
	});
});

module.exports = router;
