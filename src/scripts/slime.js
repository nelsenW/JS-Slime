import {ColorPad, COLORS} from "./color_pads"

const ANIMATIONS = {
    'rangedAttack': 14,
    'meleeAttack': 10,
    'death': 11,
    'dash': 4,
    'hurt': 2,
    'move': 7,
    'crouch': 9,
    'idle': 9,
    'jump': 6,
    'land': 8
}

export default class Slime{

    constructor(pos, game, ctx, canvas){  
        this.pos = pos;
        this.vel = [0,0];
        this.game = game;
        this.color = "blue";
        this.canvas = canvas;
        this.ctx = ctx;
        this.gravity = 0.98;
        this.terminal_vel = 35;
        this.grav_dir = 1;
        this.jumpCount = 0;
        this.jumpCountMax = 1;
        this.state = "idle";
        this.landing = false;
        this.health = 64;
        this.radius = this.health / 2;
        this.healthRegen = false;
        this.damage = 10;
        this.redDmgMod = 2;
        this.ignoreCollision = false;
        this.dashCount = 0;
        this.dashCountMax = 0;
        this.floorColor = null;
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
        if (this.color !== "blue"){
            this.ctx.drawImage(slimeSheet, x, y, 128, 128, this.pos[0], this.pos[1], this.health, this.health);
            let focused = this.focus(this.color);
            this.ctx.putImageData(focused, this.pos[0], this.pos[1]);
        } else {
            this.ctx.drawImage(slimeSheet, x, y, 128, 128, this.pos[0], this.pos[1], this.health, this.health);
        }
        if (this.state === 'land' && position === 7){
            this.landing = true
        }
    }

    updatepos(){
        this.pos[0] += this.vel[0];
        if (this.vel[1] < this.terminal_vel){
            this.vel[1] += this.gravity
        }
        this.pos[1] += this.vel[1];
    }

    move(slimeMove){
        switch (slimeMove){
            case "jump":
                if (this.jumpCount > 0){
                    this.state = 'jump';
                    if (this.color === 'pink' && this.jumpCount === 1){
                        this.vel[1] -= 20;
                    } else {
                        this.vel[1] -= 60; 
                    }
                    this.jumpCount--;
                    this.landing = false;
                }
                break;
            case "move left":
                this.state = 'move'
                this.vel[0] = -8;
                break;
            case "move right":
                this.vel[0] = 8;
                this.state = 'move'
                break;
            case "crouch":
                this.crouch()
                break;
            case "stop":
                this.state = 'idle'
                this.vel[0] = 0;
                break;
        }
    }

    crouch(){
        this.state = 'crouch'
    }

    focus(color){
        let slimeScan = this.ctx.getImageData(this.pos[0],this.pos[1], 64, 64)
        let slimeArr = []
        for(let i = 3; i < slimeScan.data.length; i+=4){
            slimeArr.push(slimeScan.data[i])
            slimeScan.data[i] = 0
        }
        for(let i = 0; i < slimeScan.data.length; i+= 4){
            let shade = COLORS['blue'][slimeScan.data[i]]
            if (shade){
                slimeScan.data[i] = COLORS[color][shade][0];
                slimeScan.data[i+1] = COLORS[color][shade][1];
                slimeScan.data[i+2] = COLORS[color][shade][2]; 
            }
        }
        for(let i = 3; i < slimeScan.data.length; i+=4){
            slimeScan.data[i] = slimeArr[(i+1)/4]
        }   
        return slimeScan
    }

    isCollidedWith(otherObject){
        let otherX = otherObject.pos[0]
        let otherY = otherObject.pos[1]

        const distanceBetween = (other, val) => {
            return other - (this.pos[val] + this.radius )
        }

        if(distanceBetween(otherY, 1) < 0){
            this.pos[1] = otherY - this.radius;
            if(this.jumpCount < this.jumpCountMax){
                this.state = 'land';
                this.jumpCount++;
            }
            // if(this.landing){
            //     this.state = 'idle'
            // }
            this.vel[this.grav_dir] = this.terminal_vel 
        }

    }
    

    resetStats(){
        this.color = "blue";
        this.jumpCountMax = 1;
        this.jumpCount = 0;
        this.ignoreCollision = false;
        this.dashCount = 0;
        this.dashCountMax = 0;
        this.healthRegen = false;
        this.damage /= this.redDmgMod
        this.gravity = 0.98;
    }
}