var Sequelize = require('sequelize');
var sequelize = new Sequelize('gamebzh', 'gamebzh', '2889372', {host : '115.159.45.241', port : '3306', dialect : 'mysql'});

var prIsLoaded = false;

// 定义表， sync的时如没有此表将创建表
var Users = sequelize.define('users',{
	id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},

	name : {type : Sequelize.STRING, unique : true},

	pass : {type : Sequelize.STRING},

	email : {type : Sequelize.STRING},

});

console.log('load gdb................')

sequelize.sync({force:false}).then(function(){
	console.log('sync success');
});


exports.addUser = function(param, callback) {
	Users.create({
		name:  	param.name,
		pass: 	param.pass,
		email:  param.email || '',
	}).then(function(result){
		console.log('addUser ok: ' + JSON.stringify(result) );
		callback(result);
	}).catch(function(err){
		console.log('addUser failed: ' + err);
		callback(false);
	});
}

exports.findUser = function(param, callback){
    Users.findOne({
        where: {
            name: 	param.name,
            pass: 	param.pass,
            email: 	param.email || '',
        }
    }).then(function(user){
    	// console.log(`find ${user.length} user:`);
        console.log(JSON.stringify(user));
        callback(user);
    }).catch(function(err){
    	console.log('findUser failed: ' + err);
    	callback(err);
    });
}

exports.showAll = function(callback){
	Users.findAll().then(function(users){
		console.log(`find ${users.length} users:`);
	    for (let user of users) {
	    	if (user){
	        	console.log(JSON.stringify(user));
	    	}
	    }
	    callback(users);

	}).catch(function(err){
		console.log('showAll failed: ' + err);
		callback(false);
	})
}
