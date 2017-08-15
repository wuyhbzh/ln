// 启动strict模式， 不允许声明全局变量
'use strict';

function log(){
    var str = "";
    for(var i=0; i<arguments.length;  i++){
        str = str + arguments[i] + " ";
    }
    console.log(str);
}

// 使用正则表达式搜索 "Runoob" 字符串，且不区分大小写：
var str = "Visit Runoob!";
var n1 = str.search(/Runoob/i);
var n2 = str.search(/runoob/i);
var n3 = str.search("Runoob");
var n4 = str.search("runoob");

log("log1", n1, n2, n3, n4)



// 使用正则表达式且不区分大小写将字符串中的 Microsoft 替换为 Runoob :
var str = "Microsoft!";
var txt = str.replace(/microsoft/i, "Runoob");
log("log2", txt);

// replace() 方法将接收字符串作为参数：
var txt = str.replace("Microsoft", "Runoob");
log("log3", txt);

// 字符串中含有 "e"，所以该实例输出为：
var patt = /e/;
var ishave = patt.test("The best things in life are free!");
log("log4", ishave);


/*是否带有小数*/
function isDecimal(strValue) {
    var objRegExp = /^\d+\.\d+$/;
    return objRegExp.test(strValue);
}

/*校验是否中文名称组成 */
function ischina(str) {
    var reg = /^[\u4E00-\u9FA5]{2,4}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验是否全由8位数字组成 */
function isStudentNo(str) {
    var reg = /^[0-9]{8}$/;   /*定义验证表达式*/
    return reg.test(str);     /*进行验证*/
}

/*校验电话码格式 */
function isTelCode(str) {
    var reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
    return reg.test(str);
}

/*校验邮件地址是否合法 */
function IsEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    return reg.test(str);
}


// 修饰符
// 修饰符用于执行区分大小写和全局匹配:
// i	执行对大小写不敏感的匹配。
// g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m	执行多行匹配。

// RegExp 对象方法
// compile	编译正则表达式
// exec	检索字符串中指定的值。返回找到的值，并确定其位置
// test	检索字符串中指定的值。返回 true 或 false。

// 支持正则表达式的 String 对象的方法
// search	检索与正则表达式相匹配的值。
// match	找到一个或多个正则表达式的匹配
// replace	替换与正则表达式匹配的子串
// split	把字符串分割为字符串数组。


var arr_str = "[1,100, 30]";
var reg = new RegExp("[0-9]*");
var arr_reg = arr_str.match(/[0-9]+/g);
log(arr_reg);
for(var key in arr_reg){
    arr_reg[key] = parseInt(arr_reg[key]);
}
log(arr_reg);
