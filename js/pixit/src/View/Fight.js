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
        var bunny = this.createBunny(100,100);
        gamer.addChild(bunny);
    }

    createBunny(x, y) {
        var bunny = new gamer.Sprite(gamer.resources["asserts/blob.png"].texture);
        bunny.interactive = true;
        bunny.buttonMode = true;
        bunny.x = x;
        bunny.y = y;
        bunny
            .on('pointerdown', this.onDragStart)
            .on('pointerup', this.onDragEnd)
            .on('pointerupoutside', this.onDragEnd)
            .on('pointermove', this.onDragMove);
        return bunny;
    }

    onDragStart(event) {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
    }

    onDragMove() {
        if (this.dragging) {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
    }


}


