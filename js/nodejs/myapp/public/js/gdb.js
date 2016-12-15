var Sequelize = require('sequelize');
var sequelize = new Sequelize('gamebzh', 'gamebzh', '2889372', {host : '115.159.45.241', port : '3306', dialect : 'mysql'});

var prIsLoaded = false;
var prIsLoading = false;

// 定义表， sync的时如没有此表将创建表
var Users = sequelize.define('tusers',{
	id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

	name : {type : Sequelize.STRING, unique : true},

	pass : {type : Sequelize.STRING},

	phoneNum : {type : Sequelize.STRING},

});


exports.getInstance = function(){
	if (prIsLoaded) {
		return exports;
	}else{
		sequelize.sync({force:false});
	}
}

exports.getUsers = function(cb){
	Users.findOne({
		where:{id:1}
	}).then(cb);
}