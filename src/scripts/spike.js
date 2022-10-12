export default class Spike{
    constructor(ctx, pos, width, height){
        this.ctx = ctx;
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    animate(){
        const spike = document.querySelector('#spike-sheet')
        this.ctx.drawImage(spike, 0, 0, 256, 256, this.pos[0], this.pos[1], this.width, this.height)
    }
}