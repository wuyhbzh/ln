// js call的用法

function Class1() {
    this.name = "class1";

    this.showNam = function () {
        console.log(this.name);
        this.showNam1 && this.showNam1();
    }
}

function Class2() {
    this.name = "class2";

    this.showNam1 = function () {
        console.log(this.name, 'aaa');
    }
}

var c1 = new Class1();
var c2 = new Class2();
c1.showNam();
// c1.showNam函数放到 c2里执行
c1.showNam.call(c2); 




// call 实现多重继承
function Class10() {
    this.showSub = function (a, b) {
        console.log(a - b);
    }
}

function Class11() {
    this.showAdd = function (a, b) {
        console.log(a + b);
    }
}

function Class21() {
    Class10.call(this);
    Class11.call(this);
} 