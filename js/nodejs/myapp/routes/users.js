var express = require('express');
var Dbmod = require('../public/js/dbdom')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	dbmod = new Dbmod();
	res.send('respond with a resource');
});

module.exports = router;
