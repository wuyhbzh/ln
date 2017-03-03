// var i=0
// while (i<5)
// {
//      console.log("The number is " + i + "<br>aa other");
// }

var a = {
    num : 1,
    visible : true,
    
};

var ea = new function(){ console.log("new something"); this.doaction = function(){ console.log("do action")} }

console.log("start 1");
console.log(a);
console.log(a.num);