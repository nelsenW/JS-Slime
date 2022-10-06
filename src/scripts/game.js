import Slime from "./slime.js"

export default class Game{
    constructor(){
        this.slime = new Slime([50,50] ,this);
    }

    draw(ctx){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.slime.draw(ctx)
    }
} 