export const COLORS = {
    "red":{
        lighterShade: [237,151,162],
        lightShade: [227,99,116],
        baseShade: [215,38,61],
        darkShade: [173,31,50],
        darkerShade: [121,21,35]
    },
    "orange":{
        lighterShade: [246,186,162],
        lightShade: [241,144,106],
        baseShade: [235,94,40],
        darkShade: [205,72,19],
        darkerShade: [149,52,14]
        
    },
    "yellow":{
        lighterShade: [248,232,180],
        lightShade: [243,215,124],
        baseShade:[238,198,67],
        darkShade: [224,177,21],
        darkerShade:[168,132,16]


    },
    "green":{
        lighterShade:[101,246,149],
        lightShade:[43,243,110],
        baseShade:[12,202,74],
        darkShade:[9,154,57],
        darkerShade:[6,96,36],
    },
    "blue":{
        lighterShade: [163,192,244],
        lightShade: [109,154,238],
        baseShade: [54,11,231],
        darkShade: [24,86,201],
        darkerShade: [17,62,146],
        163:'lighterShade',
        109:'lightShade',
        54:'baseShade',
        24:'darkShade',
        17:'darkerShade'
    },
    "violet":{
        lighterShade: [112,95,171],
        lightShade: [85,70,134],
        baseShade: [57,47,90], 
        darkShade: [34,28,53], 
        darkerShade: [9,7,13]
    },
    "pink": {
        lighterShade: [255,184,209],
        lightShade: [255,133,175],  
        baseShade: [255,71,136],   
        darkShade: [255,31,109],   
        darkerShade: [204,0,71] 
    }
}


export class ColorPad{
    constructor(ctx, canvas, color, pos, level){
        this.ctx = ctx;
        this.canvas = canvas;
        this.pos = pos;
        this.color = color; 
        this.baseShade = COLORS[color]['baseShade'];
        this.level = level;
        this.width = 200;
        this.height = 20;
    }

    animate(frame,stagger){
        const padSheet = document.querySelector("#pad-sheet")
        let position = Math.floor(frame/stagger) % 4
        let x = 32 * position
        if (this.color !== "blue"){
            this.ctx.drawImage(padSheet, x, 0, 32, 32, this.pos[0], this.pos[1], this.width, this.height);
            let newColor = this.switchColor(this.color);
            this.ctx.putImageData(newColor, this.pos[0], this.pos[1]);
        } else {
            this.ctx.drawImage(padSheet, x, y, 32, 32, this.pos[0], this.pos[1], this.width, this.height);
        }
    }

    switchColor(color){
        let padScan = this.ctx.getImageData(this.pos[0],this.pos[1], 64, 64)
        let padArr = []
        for(let i = 3; i < padScan.data.length; i+=4){
            padArr.push(padScan.data[i])
            padScan.data[i] = 0
        }
        for(let i = 0; i < padScan.data.length; i+= 4){
            let shade = COLORS['blue'][padScan.data[i]]
            if (shade){
                padScan.data[i] = COLORS[color][shade][0];
                padScan.data[i+1] = COLORS[color][shade][1];
                padScan.data[i+2] = COLORS[color][shade][2]; 
            }
        }
        for(let i = 3; i < padScan.data.length; i+=4){
            padScan.data[i] = padArr[(i+1)/4]
        }   
        return padScan
    }
}