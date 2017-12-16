export function run()
{
    let Application = PIXI.Application,
        Container = PIXI.Container,
        loader = PIXI.loader,
        resources = PIXI.loader.resources,
        TextureCache = PIXI.utils.TextureCache,
        Sprite = PIXI.Sprite;

    let app = new Application({
        width: 256,
        height: 256,
        antialiasing: true,
        transparent: false,
        resolution: 1
    });

    document.body.appendChild(app.view);

    loader
        .add("asserts/blob.png")
        .load(setup);

    let cat;
    function setup() {
        cat = new Sprite(resources["asserts/blob.png"].texture);
        cat.y = 96;
        app.stage.addChild(cat);
        app.ticker.add(delta => gameLoop(delta));
    }

    function gameLoop(delta) {
        cat.x += 1;
    }
    return 0;
}


