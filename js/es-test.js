// 启动strict模式， 不允许声明全局变量
'use strict';

function log(){
    var str = "";
    for(var i=0; i<arguments.length;  i++){
        str = str + arguments[i] + " ";
    }
    console.log(str);
}


// 数据类型：number、string、object、Boolean、null、function, undefined
// string： 由单引号或双引号的字符串
log( "string: ", "str", typeof("str"),  typeof('str')=="string" );

// number：整形， 浮点， 无法计算， 无限大
log( "number: ", 99.8,typeof(99.8), NaN, typeof(NaN), Infinity, typeof(Infinity)=="number");

// Boolean: 就是true和false啦
log( "boolean: ", true, typeof(true), false, typeof(false)=="boolean");

// undefined：未定义，变量未赋值
log( "undefine: ", undefined, typeof(papapa), "undefined"==typeof(papapa), undefined==typeof(papapa));

// null: 空
log( "null: ", null, typeof(null));

// function: 函数类型
log( "function: ", typeof(log), typeof(log)=="function");

// object: 对象类型
log( "object: ", typeof( {} ), typeof( [] )=="object");

if("str"){ log("string is true"); }
if(13){ log("number is true")}
if(!undefined){ log("undefine is false")}
if(!null){ log("null is false")}
if(log){ log("funtion is true")}
if({}){ log("object is true")}

// 数组
// instanceof 用于判断一个变量是否某个对象的实例
log( [] instanceof Array);
// constructor 属性返回对创建此对象的数组函数的引用
log( [].constructor === Array);


// arguments 多参数
log("arguments ------------");
function argTest(){
    console.log(arguments);
}

var num = 123;
var str = "is str."
argTest(1, num, str);
argTest(1, "abcd", {arg:16, name:"jone"});



// prototype
// http://www.cnblogs.com/yjf512/archive/2011/06/03/2071914.html


// 多参数传递
function argsCalss(){ 

    this.test1 = function(a, b){
        console.log("tset1", a, b);
    };

    this.test2 = function(a, b, c){
        console.log("tset2", a, b, c);
    };

    this.test3 = function() {
        console.log("tset3");
    };

    this.callback = function (funcName, args){
        this[funcName](args);
    };

    this.argsCallBack = function(funcName, args){
        this[funcName].apply(null, args);
    };
}

// argcb(test1, [1, 2]);
// argcb(test2, [1, 3, 4]);
var ac = new argsCalss();
ac.argsCallBack("test1", [1, 2]);
ac.argsCallBack("test2", [1, 2, 3]);
ac.callback("test2", [1, 2, 3]);
// test3.apply(null, []);

console.log(typeof(asdf));


// mx.sdk.sdkManager.([\w] +)\((.+?)\)

// mx.sdk.sdkManager.argsCallBack("\1", [\2]