import { ColorPad } from "./color_pads";


export default class Level {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.floorheight = canvas.height * 0.9;
        this.floorwidth = canvas.width;
        this.floorfill = canvas.height * 0.1;
        this.objects = [
        new ColorPad (this.ctx, "red", [this.canvas.width *3/8, this.canvas.height * 0.8], this.level),
        new ColorPad (this.ctx, "red", [0, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "orange", [this.canvas.width * 1/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "yellow", [this.canvas.width * 2/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "green", [this.canvas.width * 3/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "yellow", [this.canvas.width * 4/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "yellow", [this.canvas.width * 5/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "violet", [this.canvas.width * 6/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, "pink", [this.canvas.width * 7/8, this.canvas.height * 0.9], this.level),
        new Floor(this.ctx,  [0, this.canvas.height* 0.92], this.floorwidth, 1)
    ]
    }  
    
    monitorText(){
        return ('Welcome to the test lab subject #8X75G2').split("")
    }
}

class Floor{
    constructor(ctx, position, width, height){
        this.ctx = ctx;
        this.pos =  position;
        this.width = width;
        this.height = height;
        this.color = 'aliceblue';
    }

    animate(){
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.pos[0],this.pos[1], this.width, this.height)
    }
}