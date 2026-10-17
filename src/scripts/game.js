import Slime from './slime.js';
import { Level, Door } from './level.js';
import { LEVELS } from './levelsList';
import { drawHints } from './hints';

const JUMP_BUFFER_TICKS = 8;

export class Game {
	constructor(ctx, canvas) {
		this.ctx = ctx;
		this.canvas = canvas;
		this.slime = new Slime(
			[this.canvas.width * 0.54, this.canvas.height * 0.42],
			this,
			this.ctx,
			this.canvas
		);
		this.currentLevel = 1;
		this.level = new Level(
			this.ctx,
			this.canvas,
			LEVELS[this.currentLevel],
			this.slime
		);
		this.frame = 0;
		this.stagger = 5;
		this.monitor = document.querySelector('.monitor');
		this.scoreFrame = document.querySelector('.score');
		this.healthFrame = document.querySelector('.health');
		this.scoreText = document.getElementById('score');
		this.healthBar = document.getElementById('health');
		this.deathFrame = document.querySelector('.deaths');
		this.deathText = document.getElementById('deaths');
		this.deaths = 0;
		this.score = 0;
		this.allObjects = this.level.objects;
		this.tutorialFinished = false;
		this.heldDir = 0;
		this.heldCrouch = false;
		this.hintFrame = 0;
		this.jumpBuffer = 0;
		this.generateLevel();
	}

	// One fixed-length simulation step (60 per second regardless of display).
	tick(input) {
		this.applyInput(input);
		this.slime.refilledBy = null;
		this.step();
		this.queuedJump(input);
		if (this.jumpBuffer > 0) this.jumpBuffer--;
		this.slime.updateAnimation(this.frame, this.stagger);
		this.level.score--;
		this.frame++;
		this.hintFrame++;
	}

	step() {
		this.moveObjects();
		this.checkCollisions();
	}

	// Resolves held keys into movement each tick, so overlapping
	// left/right presses and key-repeat behave correctly.
	applyInput(input) {
		const slime = this.slime;
		const dir = input.horizontal();
		const crouching = input.isDown('ArrowDown');

		if (dir !== this.heldDir || crouching !== this.heldCrouch) {
			if (crouching) {
				if (!this.heldCrouch) this.frame = 0;
				slime.move('crouch');
			} else if (dir === 0) {
				slime.move('stop');
			} else {
				slime.move(dir < 0 ? 'move left' : 'move right');
			}
			this.heldDir = dir;
			this.heldCrouch = crouching;
		} else if (dir !== 0 && !crouching && slime.state !== 'dash') {
			// Re-apply walking speed after collisions zero it out.
			slime.vel[0] = slime.walkSpeed() * dir;
		}

		// Hold the last crouch pose while Down stays pressed.
		if (crouching && slime.state === 'crouch' && this.frame > 44) {
			this.frame = 44;
		}
	}

	jump() {
		if (this.slime.jumpCount === 0) {
			// Remember the press briefly so pressing just before landing works.
			this.jumpBuffer = JUMP_BUFFER_TICKS;
			return;
		}
		if (this.slime.landing === true) this.frame = 0;
		this.slime.move('jump');
	}

	// Jump the moment one becomes available (landing, or an orange wall touch)
	// if Up is held or was pressed just before. Ceiling bumps don't count, or
	// holding Up would pin the slime to the ceiling.
	queuedJump(input) {
		const by = this.slime.refilledBy;
		if (!by || by === 'ceiling') return;
		if (input.isDown('ArrowUp') || this.jumpBuffer > 0) {
			this.jumpBuffer = 0;
			this.jump();
		}
	}

	resetRoom() {
		this.deaths++;
		this.score -= 1000;
		this.slime.health = this.slime.roomHealth;
		this.slime.resetStats();
		this.slime.radiusCheck();
		this.slime.exited = false;
		this.level = new Level(
			this.ctx,
			this.canvas,
			LEVELS[this.currentLevel],
			this.slime
		);
		this.allObjects = this.level.objects;
		if (this.tutorialFinished) this.unlockDoor();
	}

	unlockDoor() {
		const door = this.allObjects.find((el) => el instanceof Door);
		if (door) door.color = 'lightgreen';
	}

	draw(ctx, canvas) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		drawHints(ctx, canvas, this.level, this.hintFrame);
		this.allObjects.forEach((obj) => {
			obj.animate(this.frame, this.stagger);
		});
		this.slime.draw();
		if (this.currentLevel >= 9) {
			this.scoreFrame.style.display = 'inline';
			this.healthFrame.style.display = 'inline-block';
			this.deathFrame.style.display = 'inline';
			this.deathText.textContent = this.deaths;
			this.scoreText.textContent = this.score;
			this.healthBar.value = this.slime.health;
		}
	}

	moveObjects() {
		this.slime.updatepos();
	}

	checkCollisions() {
		for (let i = 0; i < this.allObjects.length; i++) {
			this.slime.isCollidedWith(this.allObjects[i]);
			if (this.slime.exited && this.tutorialFinished === true) {
				this.nextLevel();
			}
		}
	}

	checkGameStatus() {
		if (
			this.slime.pos[1] > this.canvas.height ||
			this.slime.pos[1] + this.slime.health < 0
		) {
			return true;
		}
		if (this.slime.health <= 0) {
			return true;
		}
		return false;
	}

	nextLevel(passedLevel = 2) {
		this.score += this.level.score;
		this.slime.exited = false;
		this.currentLevel += passedLevel - 1;
		this.level = new Level(
			this.ctx,
			this.canvas,
			LEVELS[this.currentLevel],
			this.slime
		);
		this.allObjects = this.level.objects;
		this.slime.resetStats();
		this.slime.roomHealth = this.slime.health;
		this.tutorialFinished = false;
		this.generateLevel();
	}

	async generateLevel() {
		// Each call supersedes any typing still in progress, so a previous
		// level's text can't interleave or unlock the new level's door.
		const typingId = (this.typingId = (this.typingId || 0) + 1);
		const monitorText = document.querySelector('#monitor-text');
		monitorText.textContent = '';

		let textArr = this.level.monitorText;

		for (let i = 0; i < textArr.length; i++) {
			await this.typeSpeed(50);
			if (typingId !== this.typingId) return;
			monitorText.textContent += textArr[i];
		}

		this.unlockDoor();
		this.tutorialFinished = true;
	}
	typeSpeed = (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};
}
