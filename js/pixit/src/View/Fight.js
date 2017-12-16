export default class Fight
{

    constructor()
    {
        this.res = "asserts/blob.png";
    }

    destroy()
    {
        
    }

    onEnter()
    {
        console.log('do onEnter')
        this.cat = new gamer.Sprite(gamer.resources["asserts/blob.png"].texture);
        this.cat.y = 96;

        gamer.app.stage.addChild(this.cat);
        gamer.app.ticker.add(delta => this.gameLoop(delta));
    }

    gameLoop(delta)
    {
        this.cat.x += 1;
    }

}


