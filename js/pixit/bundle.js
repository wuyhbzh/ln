(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var engine = {};

var newFunction = function() {
    let Application = PIXI.Application, Container = PIXI.Container, loader = PIXI.loader, resources = PIXI.loader.resources, TextureCache = PIXI.utils.TextureCache, Sprite = PIXI.Sprite;
    let app = new Application({
        width: 256,
        height: 256,
        antialiasing: true,
        transparent: false,
        resolution: 1
    });
    return { app, loader, Sprite, resources };
}

engine = newFunction();
module.exports = engine
},{}],2:[function(require,module,exports){
var m2 = require('./module2.js');
require('./main.js');
console.log(m2);
},{"./main.js":3,"./module2.js":4}],3:[function(require,module,exports){
// https://www.codeandweb.com/physicseditor
var eng = require('./engine.js')
document.body.appendChild(eng.app.view);

eng.loader
    .add("assert/blob.png")
    .load(setup);

let cat;
function setup() {
    cat = new eng.Sprite(eng.resources["assert/blob.png"].texture);
    cat.y = 96;
    app.stage.addChild(cat);
    app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
    cat.x += 1;
}
},{"./engine.js":1}],4:[function(require,module,exports){
module.exports = 'It works from module2.js.'
},{}]},{},[2]);