import { ColorPad } from './color_pads';
import Spike from './spike';

export class Level {
	constructor(ctx, canvas, optionsHash, slime) {
		this.ctx = ctx;
		this.score = 1000;
		this.canvas = canvas;
		this.monitorText = '';
		this.slime = slime;
		this.objects = this.optionsBreaker(optionsHash);
	}

	optionsBreaker(optionsHash) {
		this.monitorText = optionsHash['monitorText'];
		return this.tileMapping(optionsHash['tileArray']);
	}

	tileMapping(TileArray) {
		let objectsArray = [];
		let TileWidth = this.canvas.width / TileArray[0].length;
		let TileHeight = this.canvas.height / TileArray.length;

		for (let i = 0; i < TileArray.length; i++) {
			for (let j = 0; j < TileArray[0].length; j++) {
				let x = j * TileWidth;
				let y = i * TileHeight;

				switch (TileArray[i][j]) {
					case ' ':
						break;
					case 'e':
						objectsArray.push(
							new Door(this.ctx, [x, y], TileWidth, TileHeight)
						);
						break;
					case '#':
						objectsArray.push(
							new Floor(this.ctx, [x, y], TileWidth, TileHeight, 'slategrey')
						);
						break;
					case '_':
						objectsArray.push(
							new Floor(this.ctx, [x, y], TileWidth, TileHeight, 'aliceblue')
						);
						break;
					case 'r':
						objectsArray.push(
							new ColorPad(this.ctx, 'red', [x, y], TileWidth, TileHeight)
						);
						break;
					case 'o':
						objectsArray.push(
							new ColorPad(this.ctx, 'orange', [x, y], TileWidth, TileHeight)
						);
						break;
					case 'y':
						objectsArray.push(
							new ColorPad(this.ctx, 'yellow', [x, y], TileWidth, TileHeight)
						);
						break;
					case 'g':
						objectsArray.push(
							new ColorPad(this.ctx, 'green', [x, y], TileWidth, TileHeight)
						);
						break;
					case 'v':
						objectsArray.push(
							new ColorPad(this.ctx, 'violet', [x, y], TileWidth, TileHeight)
						);
						break;
					case 'p':
						objectsArray.push(
							new ColorPad(this.ctx, 'pink', [x, y], TileWidth, TileHeight)
						);
						break;
					case '^':
						objectsArray.push(
							new Spike(this.ctx, [x, y], TileWidth, TileHeight)
						);
						break;
					case 's':
						this.slime.vel = [0, 0];
						this.slime.pos = [x, y];
						break;
				}
			}
		}
		return objectsArray;
	}
}

class Floor {
	constructor(ctx, position, width, height, color) {
		this.ctx = ctx;
		this.pos = position;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	animate() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
	}
}

export class Door {
	constructor(ctx, position, width, height) {
		this.ctx = ctx;
		this.pos = position;
		this.width = width;
		this.height = height;
		this.color = 'darkgrey';
	}

	animate() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
	}
}
