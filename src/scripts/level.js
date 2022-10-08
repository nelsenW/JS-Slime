import { ColorPad } from "./color_pads";


export default class Level {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.floorheight = canvas.height * 0.9;
        this.floorwidth = canvas.width;
        this.floorfill = canvas.height * 0.1;
        this.colorpads = [
        new ColorPad (this.ctx, this.canvas, "red", [0, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, this.canvas, "orange", [this.canvas.width * 1/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, this.canvas, "yellow", [this.canvas.width * 2/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, this.canvas, "green", [this.canvas.width * 3/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, this.canvas, "violet", [this.canvas.width * 6/8, this.canvas.height * 0.9], this.level),
        new ColorPad (this.ctx, this.canvas, "pink", [this.canvas.width * 7/8, this.canvas.height * 0.9], this.level),
    ]
    }

    draw(){
        this.colorpads.forEach((pad) =>{
            pad.drawPad();
        });
    }

   
}