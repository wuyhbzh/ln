var Sequelize = require('sequelize');
var sequelize = new Sequelize('gamebzh', 'gamebzh', '2889372', {host : '115.159.45.241', port : '3306', dialect : 'mysql'});

// 定义表， sync的时如没有此表将创建表
var Users = sequelize.define('tusers',{
	id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

	name : {type : Sequelize.STRING, unique : true},

	pass : {type : Sequelize.STRING},

	phoneNum : {type : Sequelize.STRING},

});


// 同步
sequelize.sync().then(function() {
	
	// 添加数据
	// return Users.create({
	// 	name: 'janedoe',
	// 	pass: '123456',
	// 	phoneNum: '8888',
	// });


	Users.findById(1).then(function(res){
		console.log(res.id);
	});

	// sequelize.query('select * from tusers', null, {logging : true, plain : true,  raw : true},[]).success(function(res){
	//     console.log(res);
	// });

	console.log('1111111111');
}).then(function() {

	// find
	// Users.findAll({limit : 10, order : 'id asc'}, {raw : true, logging : true, plain : false}).on('success', function(res){
	//     console.log(res);
	// }).on('failure', function(err){
	//     console.log(err);
	// })

	console.log('222222222222');
}).then(function(){
	console.log('33333333333333');
});
console.log('0000000000');
