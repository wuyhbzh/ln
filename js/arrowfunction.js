// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// 数据 map forEach 方法
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

var map1 = materials.map(function (material) {
    return material.length;
}); // [8, 6, 7, 9]
console.log(map1);

var map2 = materials.map((material) => {
    return material.length;
}); // [8, 6, 7, 9]
console.log(map2);

var map3 = materials.map(material => material.length); // 箭头函数 [8, 6, 7, 9]
console.log(map3);

materials.forEach(console.log);


// 箭头函数不绑定this 
// 不绑定arguments
function foo() {

    var f1 = (i) => {
        console.log('f1 this', this.toString());
        console.log('f1 arguments', arguments[0]);
        console.log('f1 i', i);
        return arguments[0];
    }
    var f2 = function(i){
        console.log('f2 this', this.toString());
        console.log('f2 arguments', arguments[0]);
        console.log('f2 i', i);
        return arguments[0];
    }

    // foo函数的间接参数绑定
    console.log('f1 return', f1('abc1'))
    console.log('')
    console.log('f2 return', f2('abc2'))
}
console.log('箭头函数不绑定this 不绑定arguments')
var f = new foo(1);