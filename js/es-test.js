// javascript base

function log(){
    var str = "";
    for(i=0; i<arguments.length;  i++){
        str = str + arguments[i] + " ";
    }
    console.log(str);
}

//

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
