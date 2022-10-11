import { ColorPad } from "./color_pads";


export default class Level {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.objects = [];
        this.monitorText = ''
    }  
    
    optionsBreaker(optionsHash){
        this.objects = this.tileMapping(optionsHash['tileArray'])
        this.monitorText = optionsHash['monitorText']
    }

    tileMapping(TileArray){
        let objectsArray = [];
        let TileWidth =  this.canvas.width/TileArray[0].length;
        let TileHeight = this.canvas.height/TileArray.length;

        for(let i = 0; i < TileArray.length; i++){
            for(let j = 0; j < TileArray[0].length; j++){
                let x = j * (TileWidth);
                let y = i * (TileHeight);
                switch(TileArray[i][j]){
                    case (' '):
                        break;
                    case ('e'):
                        objectsArray.push(new Door(this.ctx, [x, y], TileWidth, TileHeight));
                        break;
                    case ('#'):
                        objectsArray.push(new Floor(this.ctx, [x,y], TileWidth, TileHeight));
                        break;
                    case ('r'):
                        objectsArray.push(new ColorPad(this.ctx, 'red', [x,y]));
                        break;
                    case ('o'):
                        objectsArray.push(new ColorPad(this.ctx, 'orange', [x,y]));
                        break;
                    case ('y'):
                        objectsArray.push(new ColorPad(this.ctx, 'yellow', [x,y]));
                        break;
                    case ('g'):
                        objectsArray.push(new ColorPad(this.ctx, 'green', [x,y]));
                        break;
                    case ('v'):
                        objectsArray.push(new ColorPad(this.ctx, 'violet', [x,y]));
                        break;
                    case ('p'):
                        objectsArray.push(new ColorPad(this.ctx, 'orange', [x,y]));
                        break;
                }
            }
        }
        return objectsArray
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