const CONSTANTS = {
    GRAVITY: 0.98,
    TERMINAL_VEL: 35, 
    SLIME_RADIUS: 20
}


export default class Slime{

    constructor(pos, game){ 
        this.pos = pos;
        this.vel = [0,0];
        this.radius = 20;
        this.game = game;
        this.color = "black"
    }

    animate(ctx){
        this.move();
        this.drawSlime(ctx)
    }


    drawSlime(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    move(slimeMove){
        switch (slimeMove){
            case "jump":
                this.vel[1] -= 8;
                break;
            case "move left":
                this.vel[0] -= 8;
                break;
            case "move right":
                this.vel[0] += 8;
                break;
            case "crouch":
                this.crouch()
                break;
        }
    }

    crouch(){
        console.log("crouch")
    }
}