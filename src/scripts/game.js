import Slime from "./slime.js";
import Level from "./level.js";
import {ColorPad} from "./color_pads.js";

export default class Game{
    constructor(ctx, canvas){
        this.gameSpeed = 20;
        this.ctx = ctx;
        this.canvas = canvas;
        this.slime = new Slime([this.canvas.width/2 , this.canvas.height/2],this, this.ctx, this.canvas);
        this.level = new Level(this.ctx, this.canvas);
        this.colorpad = new ColorPad (this.ctx, this.canvas, "pink", [this.canvas.width, this.canvas.height * 0.9] )
    }

    draw(ctx, canvas){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.level.drawfloor()
        this.slime.animate(ctx, canvas)
    }
} 