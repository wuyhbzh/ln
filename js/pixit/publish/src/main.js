(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameManager = function () {
    function GameManager() {
        var _this = this;

        _classCallCheck(this, GameManager);

        var cfg = {
            width: 256,
            height: 256,
            antialiasing: true,
            transparent: false,
            resolution: 1
        };

        this.app = new PIXI.Application(cfg);
        this.Container = PIXI.Container;
        this.loader = PIXI.loader;
        this.resources = PIXI.loader.resources;
        this.TextureCache = PIXI.utils.TextureCache;
        this.Sprite = PIXI.Sprite;

        document.body.appendChild(this.app.view);

        this.app.ticker.add(function (delta) {
            return _this.rootLoop(delta);
        });

        this.views = [];
    }

    _createClass(GameManager, [{
        key: 'destroy',
        value: function destroy() {}
    }, {
        key: 'run',
        value: function run(view) {
            console.log('gm do run');
            var v = new view();
            this.loader.add(v.res).load(v.onEnter.bind(v));
        }
    }, {
        key: 'addChild',
        value: function addChild(node) {
            this.app.stage.addChild(node);
        }
    }, {
        key: 'addView',
        value: function addView() {}
    }, {
        key: 'removeView',
        value: function removeView() {}
    }, {
        key: 'rootLoop',
        value: function rootLoop(delta) {}
    }]);

    return GameManager;
}();

exports.default = GameManager;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fight = function () {
    function Fight() {
        _classCallCheck(this, Fight);

        this.res = "asserts/blob.png";
    }

    _createClass(Fight, [{
        key: "destroy",
        value: function destroy() {}
    }, {
        key: "onEnter",
        value: function onEnter() {
            console.log('do onEnter');
            this.cat = new gamer.Sprite(gamer.resources["asserts/blob.png"].texture);
            this.cat.y = 96;
            gamer.addChild(this.cat);

            // gamer.app.ticker.add(delta => this.gameLoop(delta));

            var bunny = this.createBunny(100, 100);
            gamer.addChild(bunny);
        }

        // gameLoop(delta)
        // {
        //     this.cat.x += 1;
        // }

    }, {
        key: "createBunny",
        value: function createBunny(x, y) {

            // create our little bunny friend..
            var bunny = new gamer.Sprite(gamer.resources["asserts/blob.png"].texture);
            // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
            bunny.interactive = true;
            // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
            // bunny.buttonMode = true;

            bunny.on('pointerdown', this.onDragStart).on('pointerup', this.onDragEnd).on('pointerupoutside', this.onDragEnd).on('pointermove', this.onDragMove);

            // For mouse-only events
            // .on('mousedown', onDragStart)
            // .on('mouseup', onDragEnd)
            // .on('mouseupoutside', onDragEnd)
            // .on('mousemove', onDragMove);

            // For touch-only events
            // .on('touchstart', onDragStart)
            // .on('touchend', onDragEnd)
            // .on('touchendoutside', onDragEnd)
            // .on('touchmove', onDragMove);

            // move the sprite to its designated position
            bunny.x = x;
            bunny.y = y;

            return bunny;
            // add it to the stage
            // app.stage.addChild(bunny);
        }
    }, {
        key: "onDragStart",
        value: function onDragStart(event) {
            // store a reference to the data
            // the reason for this is because of multitouch
            // we want to track the movement of this particular touch
            this.data = event.data;
            this.alpha = 0.5;
            this.dragging = true;
        }
    }, {
        key: "onDragEnd",
        value: function onDragEnd() {
            this.alpha = 1;
            this.dragging = false;
            // set the interaction data to null
            this.data = null;
        }
    }, {
        key: "onDragMove",
        value: function onDragMove() {
            if (this.dragging) {
                var newPosition = this.data.getLocalPosition(this.parent);
                this.x = newPosition.x;
                this.y = newPosition.y;
            }
        }
    }]);

    return Fight;
}();

exports.default = Fight;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Fight = require('./Fight');

Object.defineProperty(exports, 'Fight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Fight).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"./Fight":2}],4:[function(require,module,exports){
(function (global){
'use strict';

var _GameManager = require('./GameManager');

var _GameManager2 = _interopRequireDefault(_GameManager);

var _View = require('./View');

var View = _interopRequireWildcard(_View);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://www.codeandweb.com/physicseditor
global.gamer = new _GameManager2.default();

gamer.run(View.Fight);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./GameManager":1,"./View":3}]},{},[4]);
