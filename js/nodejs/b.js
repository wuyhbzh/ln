exports.f = function(){

	console.log('bbb');
}
var isLoaded = false;
exports.num = 1;

exports.isLoaded = false;

exports.getInstance = function(){
	isLoaded = true;
	return this;
}

exports.isLoaded = function(){
	return isLoaded;
}
