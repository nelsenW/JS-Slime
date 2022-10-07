export default class Level {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.floorheight = canvas.height * 0.9
        this.floorwidth = canvas.width 
        this.floorfill = canvas.height * 0.1
    }

    drawfloor(){
        this.ctx.fillStyle = "black"
        this.ctx.fillRect(0, this.floorheight, this.floorwidth, this.floorfill)
    }
    
}