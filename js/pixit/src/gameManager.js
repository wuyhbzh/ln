var exp = {};
module.exports = exp;

exp.run = function() { 
    var eng = require('./engine.js')
    document.body.appendChild(eng.app.view);

    eng.loader
        .add("assert/blob.png")
        .load(setup);

    let cat;
    function setup() {
        cat = new eng.Sprite(eng.resources["assert/blob.png"].texture);
        cat.y = 96;
        eng.app.stage.addChild(cat);
        eng.app.ticker.add(delta => gameLoop(delta));
    }

    function gameLoop(delta) {
        cat.x += 1;
    }
}
