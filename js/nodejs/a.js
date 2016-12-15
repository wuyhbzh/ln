var b = require('./b');
console.log('----------------------')
console.log(b);
console.log('b str:' + b);
console.log('----------------------')
b.f()					// bbb
console.log('哟呵呵'+b.num)		// 1
b.num = 3;
var c = require('./b')
console.log('可以'+c.num)		// 3
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