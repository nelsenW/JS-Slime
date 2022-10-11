import { ColorPad } from "./color_pads";


export default class Level {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.objects = [];
        this.monitorText = ''
    }  
    
    optionsBreaker(optionsHash){
        let objectsArray = [];

        optionsHash['platforms'].forEach( plat => {
            objectsArray.push(new Floor(this.ctx, [plat.pos[0] * this.canvas.width, plat.pos[1] * this.canvas.height], plat.width * this.canvas.width, plat.height * this.canvas.height));
        })

        optionsHash['colorPads'].forEach( pad => {
            objectsArray.push(new ColorPad(this.ctx, pad.color, [pad.pos[0], pad.pos[1]]));
        })

        let door = optionsHash['exitDoor']
        objectsArray.push(new Door(this.ctx, [door.pos[0] * this.canvas.width, door.pos[1] * this.canvas.height], door.width * this.canvas.width, door.height * this.canvas.height));

        this.monitorText = optionsHash['monitorText']
        this.objects = objectsArray;
    }
}   

class Floor{
    constructor(ctx, position, width, height){
        this.ctx = ctx;
        this.pos =  position;
        this.width = width;
        this.height = height;
        this.color = 'slategrey';
    }

    animate(){
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.pos[0],this.pos[1], this.width, this.height)
    }
}

class Door{
    constructor(ctx, position, width, height){
        this.ctx = ctx;
        this.pos =  position;
        this.width = width;
        this.height = height;
        this.color = 'darkgrey';
    }

    animate(){
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.pos[0],this.pos[1], this.width, this.height)
    }
}