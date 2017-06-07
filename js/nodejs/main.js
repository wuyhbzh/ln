var esprima = require("esprima");
var escodegen = require("escodegen");
var esmangle = require("esmangle");
var estraverse = require("estraverse");
var fs = require('fs');

var changeVar = function(pData, pVarName){
    // pData = fs.readFileSync("./js/nodejs/tsetast.js").toString();
    var ast = esprima.parse(pData);

    ast = esmangle.mangle(ast);

    var varlist = [];
    var varindex = 1;

    // estraverse.traverse(ast,{
    //     enter: function(node){
    //         // console.log(node);
    //         // console.log("");
    //         varlist = [];
    //         varindex = 1;
    //         if (node.body && node.body.forEach){
    //             node.body.forEach(function(value, index, array){
    //                 if (value.kind && value.kind === 'var' && value.type == 'VariableDeclaration') {
    //                     for (var key in value.declarations) {
    //                         varlist[value.declarations[key].id.name] = varindex;
    //                         varindex = varindex + 1;
    //                     }
    //                 }
    //             });
    //         }
    //     },

    //     leave: function(node){
    //         if (node.type === "Identifier" && varlist[node.name]) {
    //             node.name = "a" + varlist[node.name];
    //         }
    //     },
    // });

    // estraverse.traverse(ast,{
    //     enter: function(node){
    //         if (node.type === "Identifier" && varlist[node.name]){
    //             node.name = "a" + varlist[node.name];
    //         }
    //     },
    // });

    return escodegen.generate(ast);
}


function walk(path, floor, handleFile) {
    handleFile(path, floor);
    floor++;
    fs.readdir(path, function (err, files) {
        if (err) {
            console.log('read dir error');
        } else {
            files.forEach(function (item) {
                var tmpPath = path + '/' + item;
                fs.stat(tmpPath, function (err1, stats) {
                    if (err1) {
                        console.log('stat error');
                    } else {
                        if (stats.isDirectory()) {
                            walk(tmpPath, floor, handleFile);
                        } else {
                            handleFile(path, floor, item);
                        }
                    }
                })
            });
        }
    });
}

function handleFile(path, floor, fileName) {
    var tmpPath = path;
    if (fileName){
        tmpPath = tmpPath + '/' + fileName;
    }
    fs.stat(tmpPath, function (err1, stats) {
        if (err1) {
            console.log('stat error');

        } else if (stats.isDirectory()) {
        } else  {
            fs.readFile(tmpPath, function (err, data) {
                data = data.toString();
                data = changeVar(data, fileName);
                fs.writeFile(tmpPath, data);
                console.log("write " + tmpPath);
            });
        }
    })
} 

walk("C:/Users/mx/Desktop/sdk",  0,  handleFile);