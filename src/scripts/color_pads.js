export const COLORS = {
    "red":{
        baseshade: 'rgb(215,38,61, 0.7)'
    },
    "orange":{
        baseshade: 'rgb(235,94,40, 0.7)'
    },
    "yellow":{
        baseshade: 'rgb(238,198,67, 0.7)'
    },
    "green":{
        baseshade: 'rgb(12,202,74, 0.7)'
    },
    "blue":{
        baseshade: 'rgb(100,149,237, 0.7)'
    },
    "indigo":{
        baseshade: 'rgb(13,27,42, 0.7)'
    },
    "violet":{
        baseshade: 'rgb(57,47,90, 0.7)'
    },
    "pink": {
        baseshade: 'rgb(255,184,209, 0.7)'
    }
}

export class ColorPad {
    constructor(ctx, canvas, color, pos){
        this.ctx = ctx;
        this.canvas = canvas;
        this.pos = pos;
        this.color = COLORS[color]['baseshade']
    }

    drawPad(){
        this.ctx.fillStyle = '#FFB8D1'
        this.ctx.fillRect(this.floorwidth/2, this.floorheight, this.floorwidth / 8, this.floorfill )
    }
}