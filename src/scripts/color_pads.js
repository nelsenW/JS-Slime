export const COLORS = {
	red: {
		lighterShade: [237, 151, 162],
		lightShade: [227, 99, 116],
		baseShade: [215, 38, 61],
		darkShade: [173, 31, 50],
		darkerShade: [121, 21, 35],
	},
	orange: {
		lighterShade: [246, 186, 162],
		lightShade: [241, 144, 106],
		baseShade: [235, 94, 40],
		darkShade: [205, 72, 19],
		darkerShade: [149, 52, 14],
	},
	yellow: {
		lighterShade: [248, 232, 180],
		lightShade: [243, 215, 124],
		baseShade: [238, 198, 67],
		darkShade: [224, 177, 21],
		darkerShade: [168, 132, 16],
	},
	green: {
		lighterShade: [101, 246, 149],
		lightShade: [43, 243, 110],
		baseShade: [12, 202, 74],
		darkShade: [9, 154, 57],
		darkerShade: [6, 96, 36],
	},
	blue: {
		lighterShade: [163, 192, 244],
		lightShade: [109, 154, 238],
		baseShade: [54, 11, 231],
		darkShade: [24, 86, 201],
		darkerShade: [17, 62, 146],
		163: 'lighterShade',
		109: 'lightShade',
		54: 'baseShade',
		24: 'darkShade',
		17: 'darkerShade',
	},
	violet: {
		lighterShade: [112, 95, 171],
		lightShade: [85, 70, 134],
		baseShade: [57, 47, 90],
		darkShade: [34, 28, 53],
		darkerShade: [9, 7, 13],
	},
	pink: {
		lighterShade: [255, 184, 209],
		lightShade: [255, 133, 175],
		baseShade: [255, 71, 136],
		darkShade: [255, 31, 109],
		darkerShade: [204, 0, 71],
	},
};

export class ColorPad {
	constructor(ctx, color, pos, width, height) {
		this.ctx = ctx;
		this.pos = pos;
		this.color = color;
		this.baseShade = COLORS[color]['baseShade'];
		this.width = width;
		this.height = height;
	}

	animate() {
        const padSheet = document.querySelector("#pad-sheet")
        let position = Object.keys(COLORS).indexOf(this.color)
        let x = 256 * position
        this.ctx.drawImage(padSheet, x, 0, 256, 256, this.pos[0], this.pos[1], this.width, this.height);  
    }
}

