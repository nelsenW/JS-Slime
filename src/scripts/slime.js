import {ColorPad, COLORS} from "./color_pads"

const CONSTANTS = {
    GRAVITY: 0.98,
    TERMINAL_VEL: 35, 
    SLIME_RADIUS: 20
}

export default class Slime{

    constructor(pos, game, ctx, canvas){  
        this.pos = pos;
        this.vel = [0,0];
        this.radius = 20;
        this.game = game;
        this.color = "blue";
        this.canvas = canvas;
        this.ctx = ctx;
        this.jumpCount = 1;
        this.jumpCountMax = 1
    }

    animate(ctx){
        this.updatepos();
        this.drawSlime(ctx)
    }


    drawSlime(ctx){
        const slimeSheet = document.querySelector("#slime-sheet")
        this.ctx.drawImage(slimeSheet, 0, 0, 32, 32, this.pos[0], this.pos[1], 32, 32)
    }

    updatepos(){
        this.pos[0] += this.vel[0];
        if (this.vel[1] < CONSTANTS.TERMINAL_VEL){
            this.vel[1] += CONSTANTS.GRAVITY
        }
        this.pos[1] += this.vel[1];
        this.isCollidedWithFloor((this.canvas.height * 0.9))
    }

    move(slimeMove){
        switch (slimeMove){
            case "jump":
                if (this.jumpCount > 0){
                    this.jumpCount--
                    this.vel[1] -= 60;
                }
                break;
            case "move left":
                this.vel[0] = -8;
                break;
            case "move right":
                this.vel[0] = 8;
                break;
            case "crouch":
                this.crouch()
                break;
            case "stop":
                this.vel[0] = 0;
                break;
        }
    }

    crouch(){
        console.log("crouch")
    }

    focus(){
        console.log(this.ctx.getImageData(this.pos[0],this.pos[1] + this.radius + 5, 1, 1))
    }

    isCollidedWithFloor(floorheight){
        let distanceBetween = floorheight - (this.pos[1] + this.radius)
        if(distanceBetween < 0){
            this.pos[1] = floorheight - this.radius
            if(this.jumpCount < this.jumpCountMax){
                this.jumpCount++
            }
            this.vel[1] = CONSTANTS.TERMINAL_VEL
        }
    }
}