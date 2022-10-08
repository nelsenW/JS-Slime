import Slime from "./slime.js";
import Level from "./level.js";
import {ColorPad} from "./color_pads.js";

export default class Game{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.slime = new Slime([this.canvas.width/2 , this.canvas.height/2],this, this.ctx, this.canvas);
        this.level = new Level(this.ctx, this.canvas);
        this.frame = 0;
        this.stagger = 5
    }

    draw(ctx, canvas){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const bluePalette = document.querySelector("#blue-pallette");
        this.ctx.drawImage(bluePalette, 0, 0);
        this.level.draw()
        this.slime.animate(this.frame, this.stagger);
        this.frame++
    }

} 