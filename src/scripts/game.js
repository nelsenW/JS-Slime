import Slime from "./slime.js"

export default class Game{
    constructor(){
        this.gameSpeed = 20;
        this.slime = new Slime([50,50] ,this);
    }

    draw(ctx, canvas){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.slime.animate(ctx)
    }
} 