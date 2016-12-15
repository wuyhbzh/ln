var b = require('./b');
console.log('----------------------')
console.log(b);
console.log('b str:' + b);
console.log('----------------------')
b.f()					// bbb
console.log('b的num: '+b.num)		// 1
b.num = 3;
console.log('b isLoaded: '+b.isLoaded());
console.log('b isLoaded: ' + b.getInstance().isLoaded() + ' 实例化后');
var c = require('./b')
console.log('c的num: '+c.num)		// 3
console.log('b isLoaded: '+c.isLoaded());
console.log('\n\n')



var c = require('./c');
console.log('+++++++++++++++++++++++')
console.log(c);
console.log('c str:\n' + c);
console.log('+++++++++++++++++++++++')
var cc = new c(); 		// I'm c
cc.run("just new");		// c run run runjust new
console.log(cc);
console.log('\n\n')


var d = require('./d');
console.log(d)