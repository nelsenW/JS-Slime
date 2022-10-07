export const COLORS = {
    "red":{
        baseshade: 'rgb(215,38,61, 0.7)',
        redMod: 215,
        greenMod: 38,
        blueMod: 61
    },
    "orange":{
        baseshade: 'rgb(235,94,40, 0.7)',
        redMod: 235,
        greenMod: 94,
        blueMod: 40
    },
    "yellow":{
        baseshade: 'rgb(238,198,67, 0.7)',
        redMod: 238,
        greenMod: 198,
        blueMod: 67
    },
    "green":{
        baseshade: 'rgb(12,202,74, 0.7)',
        redMod: 12,
        greenMod: 202,
        blueMod: 74
    },
    "blue":{
        baseshade: 'rgb(100,149,237, 0.7)',
        redMod: 100,
        greenMod: 149,
        blueMod: 237
    },
    "indigo":{
        baseshade: 'rgb(13,27,42, 0.7)',
        redMod: 13,
        greenMod: 27,
        blueMod: 42
    },
    "violet":{
        baseshade: 'rgb(57,47,90, 0.7)',
        redMod: 57,
        greenMod: 47,
        blueMod: 90
    },
    "pink": {
        baseshade: 'rgb(255,184,209, 0.7)',
        redMod: 255,
        greenMod: 184,
        blueMod: 209
    }
}


export class ColorPad {
    constructor(ctx, canvas, color, pos){
        this.ctx = ctx;
        this.canvas = canvas;
        this.pos = pos;
        this.color = COLORS[color]['baseshade']
    }

    drawPad(color){
        this.ctx.fillStyle = COLORS[color].baseshade
        this.ctx.fillRect(this.floorwidth/2, this.floorheight, this.floorwidth / 8, this.floorfill )
    }
}