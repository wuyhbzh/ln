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