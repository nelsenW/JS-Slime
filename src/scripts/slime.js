import { ColorPad, COLORS } from './color_pads';
import { Door } from './level';
import Spike from './spike';

const ANIMATIONS = {
	rangedAttack: 14,
	meleeAttack: 10,
	death: 11,
	dash: 4,
	hurt: 4,
	move: 7,
	crouch: 9,
	idle: 9,
	jump: 6,
	land: 8,
};

export default class Slime {
	constructor(pos, game, ctx, canvas) {
		this.pos = pos;
		this.vel = [0, 0];
		this.game = game;
		this.color = 'blue';
		this.canvas = canvas;
		this.ctx = ctx;
		this.gravity = 0;
		this.terminal_vel = 12;
		this.grav_dir = 1;
		this.jumpCount = 0;
		this.jumpCountMax = 1;
		this.state = 'idle';
		this.landing = false;
		this.health = 64;
		this.roomHealth = this.health;
		this.radius = this.health / 2;
		this.iFrames = false;
		this.maxHealth = 64;
		this.damage = 10;
		this.redDmgMod = 2;
		this.ignoreCollision = false;
		this.dashCount = 0;
		this.dashCountMax = 0;
		this.floorColor = null;
		this.moving = false;
	}

	animate(frame, stagger) {
		const slimeSheet = document.querySelector('#slime-sheet');
		let position = Math.floor(frame / stagger) % ANIMATIONS[this.state];
		if (this.state === 'crouch' && frame === 45) {
			position = 8;
		}
		let x = 128 * position;
		let y = Object.keys(ANIMATIONS).indexOf(this.state) * 128;
		if (this.color !== 'blue') {
			this.ctx.drawImage(
				slimeSheet,
				x,
				y,
				128,
				128,
				this.pos[0],
				this.pos[1],
				this.radius * 2,
				this.radius * 2,
			);
			let focused = this.focus(this.color);
			this.ctx.putImageData(focused, this.pos[0], this.pos[1]);
		} else {
			this.ctx.drawImage(
				slimeSheet,
				x,
				y,
				128,
				128,
				this.pos[0],
				this.pos[1],
				this.radius * 2,
				this.radius * 2
			);
		}
		if (this.state === 'land' && position === 7) {
			this.landing = true;
		} else if (this.state === 'dash' && position === 3) {
			this.vel[0] /= 3;
			this.state = 'idle';
		} else if (this.state === 'rangedAttack' && position === 13) {
			this.rangedAttack();
			this.moving = false;
		} else if (this.state === 'meleeAttack' && position === 9) {
			this.meleeAttack();
			this.moving = false;
		}
	}

	updatepos() {
		this.pos[0] += this.vel[0];
		if (this.grav_dir === -1 && this.vel[1] > -this.terminal_vel){
			this.vel[1] -= this.gravity;
		} else if (this.grav_dir === 1 && this.vel[1] < this.terminal_vel) {
			this.vel[1] += this.gravity;
		}
		this.pos[1] += this.vel[1];
	}

	move(slimeMove) {
		switch (slimeMove) {
			case 'jump':
				if (this.jumpCount > 0) {
					this.state = 'jump';
					if (this.color === 'pink' && this.jumpCount === 1) {
						this.vel[1] -= Math.sign(this.grav_dir) * 20;
 					} else {
						this.vel[1] = this.terminal_vel * Math.sign(this.grav_dir);
						this.vel[1] -= Math.sign(this.grav_dir) * 30;
					}
					this.jumpCount--;
					this.landing = false;
				}
				break;
			case 'move left':
				this.moving = true;
				this.state = 'move';
				this.vel[0] = -8;
				break;
			case 'move right':
				this.moving = true;
				this.vel[0] = 8;
				this.state = 'move';
				break;
			case 'crouch':
				this.crouch();
				break;
			case 'stop':
				this.moving = false;
				this.state = 'idle';
				this.vel[0] = 0;
				break;
			case 'dash':
				this.dashCount--;
				this.state = 'dash';
                this.vel[0] = Math.sign(this.vel[0]) * 24;
				break;
			case 'meleeAttack':
				this.moving = true;
				this.state = 'meleeAttack';
				break;
			case 'rangedAttack':
				this.moving = true;
				this.state = 'rangedAttack';
				break;
		}
		if (this.iFrames){
			this.state = 'hurt'
		}
	}

	crouch() {
		this.state = 'crouch';
		this.moving = true;
	}

	meleeAttack() {} //For future implementation 

	rangedAttack() {} //For fututre implementation 

	focus(color) {
		let slimeScan = this.ctx.getImageData(this.pos[0], this.pos[1], 64, 64);
		let slimeArr = [];
		for (let i = 3; i < slimeScan.data.length; i += 4) {
			slimeArr.push(slimeScan.data[i]);
			slimeScan.data[i] = 0;
		}
		for (let i = 0; i < slimeScan.data.length; i += 4) {
			let shade = COLORS['blue'][slimeScan.data[i]];
			if (shade) {
				slimeScan.data[i] = COLORS[color][shade][0];
				slimeScan.data[i + 1] = COLORS[color][shade][1];
				slimeScan.data[i + 2] = COLORS[color][shade][2];
			}
		}
		for (let i = 3; i < slimeScan.data.length; i += 4) {
			slimeScan.data[i] = slimeArr[(i + 1) / 4];
		}
		return slimeScan;
	}

	isCollidedWith(otherObject) {
        this.exited = false;
		if (this.horizontalCollision(otherObject)) {
			if (otherObject instanceof Door) this.exited = true;
			while (this.horizontalCollision(otherObject)) {
				this.pos[0] -=
					Math.sign(this.vel[0]) === 0 ? -1 : Math.sign(this.vel[0]);
			}
			if (otherObject instanceof Spike && !this.iFrames){
				this.takeDamage(10)
			}
			this.vel[0] = 0;
		}

		if (this.verticalCollision(otherObject)) {
            if (this.jumpCount < this.jumpCountMax &&  Math.abs(this.vel[1]) >= 0) {
				this.state = 'land';
				this.jumpCount++;
			}
			if (this.dashCount < this.dashCountMax && this.vel[1] >= 0) {
				this.dashCount++;
			}
			while (this.verticalCollision(otherObject)) {
				if (this.vel[1] === 0) this.vel[1] = -1;
				this.pos[1] -= Math.sign(this.vel[1]);
			}
			this.vel[1] = 0;
			this.floorColor = null;
			
			if (otherObject instanceof ColorPad) {
				this.floorColor = otherObject;
			}
			if (this.landing && !this.moving && !this.iFrames) {
				this.state = 'idle';
			}
			if (otherObject instanceof Door) this.exited = true;
			if (otherObject instanceof Spike && !this.iFrames){
				this.takeDamage(10)
			}
		}
	}

	verticalCollision(otherObject) {
		let otherX = otherObject.pos[0];
		let otherX2 = otherObject.pos[0] + otherObject.width;
		let otherY = otherObject.pos[1];
		let otherY2 = otherObject.pos[1] + otherObject.height;

		if (
			this.pos[1] + this.radius * 1.5 + this.vel[1] >= otherY &&
			this.pos[1] <= otherY2 &&
			this.pos[0] + this.radius * 2 - this.vel[0] >= otherX &&
			this.pos[0] <= otherX2
		) {
			return true;
		}
		return false;
	}

	horizontalCollision(otherObject) {
		let otherX = otherObject.pos[0];
		let otherX2 = otherObject.pos[0] + otherObject.width;
		let otherY = otherObject.pos[1];
		let otherY2 = otherObject.pos[1] + otherObject.height;

		if (
			this.pos[0] + this.radius * 2 >= otherX &&
			this.pos[0] <= otherX2 &&
			this.pos[1] + this.radius >= otherY &&
			this.pos[1] - this.vel[1] <= otherY2
		) {
			return true;
		}
		return false;
	}

	takeDamage(damage){
		this.state = 'hurt';
		this.iFrames = true;
		this.health -= damage;
		this.radius = this.health / 2
		if (this.health < 32){
			this.radius = 17
		}
		setTimeout(() => {
			this.iFrames = false;
			this.state = 'idle'
		},1000)
	}

	resetStats() {
		this.color = 'blue';
		this.jumpCountMax = 1;
		this.jumpCount = 0;
		this.ignoreCollision = false;
		this.dashCount = 0;
		this.dashCountMax = 0;
		this.gravity = 0.98;
		this.grav_dir = 1;
		this.vel[1] = Math.abs(this.vel[1]);
	}
}
