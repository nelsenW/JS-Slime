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
        this.stagger = 5;
        this.allObjects = [];
        this.generateLevel();
    }

    step(){
       this.moveObjects();
       this.checkCollisions(); 
    }

    draw(ctx, canvas){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.allObjects.forEach( obj => {
            obj.animate(this.frame, this.stagger)
        })
        this.frame++
    }

    moveObjects(){
       this.slime.updatepos()
    }

    checkCollisions(){
        for(let i = 0; i < this.allObjects.length; i++){
            this.slime.isCollidedWith(this.allObjects[i])
        }
        
    }

    generateLevel(){
        this.allObjects = this.allObjects.concat(this.level.objects).concat(this.slime)
    }

} 