export default class Slime{

    constructor(pos, game){ 
        this.pos = pos;
        this.vel = [0,0];
        this.radius = 20;
        this.game = game;
        this.color = "black"
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}