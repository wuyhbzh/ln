export default class GameManager
{
    constructor()
    { 
        let cfg = {
            width: 256,
            height: 256,
            antialiasing: true,
            transparent: false,
            resolution: 1
        }

        this.app = new PIXI.Application(cfg);
        this.Container = PIXI.Container;
        this.loader = PIXI.loader;
        this.resources = PIXI.loader.resources;
        this.TextureCache = PIXI.utils.TextureCache;
        this.Sprite = PIXI.Sprite;

        document.body.appendChild(this.app.view);

        this.app.ticker.add(delta => this.rootLoop(delta));

        this.views = [];

    }

    destroy()
    {

    }

    run(view)
    {
        console.log('gm do run');
        var v = new view()
        this.loader
         .add(v.res)
         .load(v.onEnter.bind(v))
    }

    addView()
    {

    }

    removeView()
    {

    }

    rootLoop(delta)
    {

    }
        
}