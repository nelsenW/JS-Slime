import {ColorPad, COLORS} from "./color_pads"

const CONSTANTS = {
    GRAVITY: 0.98,
    TERMINAL_VEL: 35, 
    SLIME_RADIUS: 40
}

const ANIMATIONS = {
    'idle': 9,
    'jump': 6,
    'land': 8
}

export default class Slime{

    constructor(pos, game, ctx, canvas){  
        this.pos = pos;
        this.vel = [0,0];
        this.radius = CONSTANTS.SLIME_RADIUS;
        this.game = game;
        this.color = "blue";
        this.canvas = canvas;
        this.ctx = ctx;
        this.jumpCount = 0;
        this.jumpCountMax = 1;
        this.state = "idle";
        this.landing = false
    }

    animate(frame, stagger){
        this.updatepos();
        this.drawSlime(frame, stagger);
    }


    drawSlime(frame, stagger){
        const slimeSheet = document.querySelector("#slime-sheet")
        let position = Math.floor(frame/stagger) % ANIMATIONS[this.state]
        let x = 128 * position
        let y = Object.keys(ANIMATIONS).indexOf(this.state) * 128
        this.ctx.drawImage(slimeSheet, x, y, 128, 128, this.pos[0], this.pos[1], 64, 64)
        if (this.state === 'land' && position === 7){
            this.landing = true
        }
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
                    this.state = 'jump';
                    this.jumpCount--;
                    this.vel[1] -= 60;
                    this.landing = false;
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
        debugger
        console.log(this.ctx.getImageData(this.pos[0],this.pos[1], 1, 1))
    }

    isCollidedWithFloor(floorheight){
        let distanceBetween = floorheight - (this.pos[1] + this.radius)
        if(distanceBetween < 0){
            this.pos[1] = floorheight - this.radius;
            if(this.jumpCount < this.jumpCountMax){
                this.state = 'land'
                this.jumpCount++;
            }
            if (this.landing){
                this.state = 'idle'
            }
            this.vel[1] = CONSTANTS.TERMINAL_VEL;
        }
    }
}