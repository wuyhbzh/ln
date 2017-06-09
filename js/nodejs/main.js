var esprima = require("esprima");
var escodegen = require("escodegen");
var esmangle = require("esmangle");
var estraverse = require("estraverse");
var fs = require('fs');

var changeVar = function(pData, pVarName){
    // pData = fs.readFileSync("./js/nodejs/tsetast.js").toString();
    var ast = esprima.parse(pData);
    ast = esmangle.mangle(ast);
    return escodegen.generate(ast);
}


function walk(path, floor, handleFile) {
    handleFile(path, floor);
    console.log("path:" + path);
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
            console.log("write " + tmpPath);
            
            // fs.readFile(tmpPath, function (err, data) {
            //     data = data.toString();
            //     data = changeVar(data, fileName);
            //     fs.writeFile(tmpPath, data);
            // });

            var data = fs.readFileSync(tmpPath).toString();
            data = changeVar(data, fileName);
            fs.writeFile(tmpPath, data);
        }
    })
} 

walk("D:/work/client/trunk-cr/src",  0,  handleFile);