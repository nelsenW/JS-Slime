import { ColorPad } from './color_pads';
import { getSlimeSheet } from './slime_sprites';
import { Door } from './level';
import Spike from './spike';

// Physics tuned for a 1920x1080 room and scaled to the real room size, so
// jumps cover the same number of tiles on every screen. Vertical values
// scale with height, horizontal ones with width.
const PHYSICS = {
	gravity: 0.98,
	terminalVel: 12,
	jumpSpeed: 20, // peaks at ~1.5 tiles
	doubleJumpBoost: 20,
	walkSpeed: 8,
	dashSpeed: 24,
};
const REF_WIDTH = 1920;
const REF_HEIGHT = 1080;

export const ANIMATIONS = {
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
		this.terminal_vel = PHYSICS.terminalVel;
		this.grav_dir = 1;
		this.jumpCount = 0;
		this.jumpCountMax = 1;
		this.state = 'idle';
		this.landing = false;
		this.health = 64;
		this.roomHealth = this.health;
		this.heightMod = this.canvas.width / 1080
		this.widthMod = this.canvas.width / 1920
		this.radius = this.health / 2 * this.widthMod;
		this.iFrames = false;
		this.maxHealth = 64;
		this.damage = 10;
		this.redDmgMod = 2;
		this.ignoreCollision = false;
		this.dashCount = 0;
		this.dashCountMax = 0;
		this.floorColor = null;
		this.moving = false;
		this.spritePos = 0;
	}

	animate(frame, stagger) {
		this.updateAnimation(frame, stagger);
		this.draw();
	}

	// Advances animation state; called once per fixed game tick.
	updateAnimation(frame, stagger) {
		let position = Math.floor(frame / stagger) % ANIMATIONS[this.state];
		if (this.state === 'crouch' && frame === 45) {
			position = 8;
		}
		this.spritePos = position;
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

	draw() {
		const frames = ANIMATIONS[this.state];
		const position = Math.min(this.spritePos, frames - 1);
		let x = 128 * position;
		let y = Object.keys(ANIMATIONS).indexOf(this.state) * 128;
		this.ctx.drawImage(
			getSlimeSheet(this.color),
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

	get scaleX() {
		return this.canvas.width / REF_WIDTH;
	}

	get scaleY() {
		return this.canvas.height / REF_HEIGHT;
	}

	walkSpeed() {
		return PHYSICS.walkSpeed * this.scaleX;
	}

	updatepos() {
		this.pos[0] += this.vel[0];
		const terminal = this.terminal_vel * this.scaleY;
		const gravity = this.gravity * this.scaleY;
		if (this.grav_dir === -1 && this.vel[1] > -terminal) {
			this.vel[1] -= gravity;
		} else if (this.grav_dir === 1 && this.vel[1] < terminal) {
			this.vel[1] += gravity;
		}
		this.pos[1] += this.vel[1];
	}

	move(slimeMove) {
		switch (slimeMove) {
			case 'jump':
				if (this.jumpCount > 0) {
					this.state = 'jump';
					const up = -Math.sign(this.grav_dir) * this.scaleY;
					if (this.color === 'pink' && this.jumpCount === 1) {
						this.vel[1] += up * PHYSICS.doubleJumpBoost;
					} else {
						this.vel[1] = up * PHYSICS.jumpSpeed;
					}
					this.jumpCount--;
					this.landing = false;
				}
				break;
			case 'move left':
				this.moving = true;
				this.state = 'move';
				this.vel[0] = -this.walkSpeed();
				break;
			case 'move right':
				this.moving = true;
				this.vel[0] = this.walkSpeed();
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
				this.vel[0] = Math.sign(this.vel[0]) * PHYSICS.dashSpeed * this.scaleX;
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
		if (this.iFrames) {
			this.state = 'hurt';
		}
	}

	land() {
		if (this.iFrames) return;
		if (this.vel[0] !== 0) {
			// Landing mid-walk goes straight back to the walk cycle.
			this.landing = true;
			this.state = 'move';
			return;
		}
		this.state = 'land';
		// Restart the animation clock so all land frames play, instead of
		// picking up wherever the jump's frame count left off.
		if (this.game) this.game.frame = 0;
	}

	crouch() {
		this.state = 'crouch';
		this.moving = true;
	}

	meleeAttack() {} //For future implementation

	rangedAttack() {} //For fututre implementation

	isCollidedWith(otherObject) {
		this.exited = false;
		const [pushDir, pushDepth] = this.horizontalPush(otherObject);
		const [vertDir, vertDepth] = this.verticalPush(otherObject);
		// A head bump or corner clip overlaps less vertically than
		// horizontally; leave those to the vertical resolution below instead
		// of shoving the slime sideways through the rest of the row.
		if (
			this.horizontalCollision(otherObject) &&
			pushDepth <= vertDepth
		) {
			if (otherObject instanceof Door) this.exited = true;
			while (this.horizontalCollision(otherObject)) {
				this.pos[0] += pushDir;
			}
			if (otherObject instanceof Spike && !this.iFrames) {
				this.takeDamage(10);
			}
			if (this.color === 'orange' && this.jumpCount < this.jumpCountMax){
				this.jumpCount++
				this.refilledBy = 'wall';
			}
			this.vel[0] = 0;
		}

		if (this.verticalCollision(otherObject)) {
			if (this.jumpCount < this.jumpCountMax) {
				this.jumpCount++;
				this.refilledBy = this.vel[1] * this.grav_dir >= 0 ? 'ground' : 'ceiling';
				// Only touching down in the gravity direction is a landing;
				// head bumps still refill the jump but don't animate.
				if (this.vel[1] * this.grav_dir >= 0) this.land();
			}
			if (this.dashCount < this.dashCountMax && this.vel[1] >= 0) {
				this.dashCount++;
			}
			while (this.verticalCollision(otherObject)) {
				this.pos[1] += vertDir;
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
			if (otherObject instanceof Spike && !this.iFrames) {
				this.takeDamage(10);
			}
		}
	}

	// Direction to push out sideways and how far: against the movement,
	// or toward the nearer edge when not moving horizontally.
	horizontalPush(otherObject) {
		const pushLeft = this.pos[0] + this.radius * 2 - otherObject.pos[0];
		const pushRight = otherObject.pos[0] + otherObject.width - this.pos[0];
		if (this.vel[0] > 0) return [-1, pushLeft];
		if (this.vel[0] < 0) return [1, pushRight];
		return pushLeft < pushRight ? [-1, pushLeft] : [1, pushRight];
	}

	// Falling or resting pushes up onto the object; rising pushes toward
	// the nearer edge, so clipping a top corner lifts the slime onto it
	// instead of dragging it down through the block.
	verticalPush(otherObject) {
		const pushUp = this.pos[1] + this.radius * 1.5 - otherObject.pos[1];
		const pushDown = otherObject.pos[1] + otherObject.height - this.pos[1];
		if (this.vel[1] < 0 && pushDown < pushUp) return [1, pushDown];
		return [-1, pushUp];
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

	takeDamage(damage) {
		this.state = 'hurt';
		this.iFrames = true;
		this.health -= damage;
		this.radiusCheck();
		setTimeout(() => {
			this.iFrames = false;
			this.state = 'idle';
		}, 1000);
	}

	baseRadius() {
		return this.health <= 32 ? 17 : this.health / 2;
	}

	radiusCheck() {
		let prev = this.radius;
		this.radius = this.baseRadius() * this.widthMod;
		if (prev < this.radius) {
			this.pos[1] -= this.radius - prev;
			this.pos[0] -= this.radius - prev;
		}
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
