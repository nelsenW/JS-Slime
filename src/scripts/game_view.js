import { Game } from './game.js';
import { setHighlightColor } from './color_pads.js';

const STEP_MS = 1000 / 60;
const MAX_FRAME_MS = 250;

// Tracks which keys are physically held, independent of key-repeat.
class InputState {
	constructor() {
		this.down = new Set();
		this.horizontalOrder = [];
	}

	press(code) {
		this.down.add(code);
		if (code === 'ArrowLeft' || code === 'ArrowRight') {
			this.horizontalOrder = this.horizontalOrder.filter((c) => c !== code);
			this.horizontalOrder.push(code);
		}
	}

	release(code) {
		this.down.delete(code);
		this.horizontalOrder = this.horizontalOrder.filter((c) => c !== code);
	}

	clear() {
		this.down.clear();
		this.horizontalOrder = [];
	}

	isDown(code) {
		return this.down.has(code);
	}

	// -1 for left, 1 for right, 0 for neither; the most recent press wins.
	horizontal() {
		const last = this.horizontalOrder[this.horizontalOrder.length - 1];
		if (last === 'ArrowLeft') return -1;
		if (last === 'ArrowRight') return 1;
		return 0;
	}
}

export default class GameView {
	constructor(ctx, canvas) {
		this.ctx = ctx;
		this.canvas = canvas;
		this.game = new Game(this.ctx, this.canvas);
		this.input = new InputState();
		this.paused = false;
		this.running = false;
		this.rafId = null;
		this.pauseMenu = document.getElementById('pause-menu');
		this.gameOverScreen = document.querySelector('.game-over-screen');
		this.gameOverMenu = document.querySelector('#game-over-menu');
		this.finalScore = document.getElementById('final-score');
		this.pauseMenu.addEventListener('click', this.pauseCallback.bind(this));
		this.gameLoop = this.gameLoop.bind(this);
	}

	start() {
		if (this.running) return;
		this.running = true;
		this.lastTime = null;
		this.accumulator = 0;
		this.rafId = window.requestAnimationFrame(this.gameLoop);
	}

	stop() {
		this.running = false;
		window.cancelAnimationFrame(this.rafId);
	}

	// Fixed-timestep loop: the simulation advances in STEP_MS increments,
	// rendering happens once per display frame.
	gameLoop(now) {
		if (!this.running) return;
		if (this.lastTime === null) this.lastTime = now;
		this.accumulator += Math.min(now - this.lastTime, MAX_FRAME_MS);
		this.lastTime = now;

		while (this.accumulator >= STEP_MS) {
			this.accumulator -= STEP_MS;
			if (this.game.checkGameStatus()) {
				this.gameOver();
				return;
			}
			this.game.tick(this.input);
		}

		this.game.draw(this.ctx, this.canvas);
		this.rafId = window.requestAnimationFrame(this.gameLoop);
	}

	gameOver() {
		this.stop();
		setHighlightColor(this.game.slime.color);
		this.gameOverScreen.style.display = 'flex';
		this.gameOverMenu.style.display = 'flex';
		this.finalScore.textContent = this.game.score;
	}

	pause() {
		if (!this.running) return;
		setHighlightColor(this.game.slime.color);
		this.pauseMenu.style.display = 'flex';
		this.paused = true;
		this.stop();
	}

	pauseCallback(e) {
		const resumeButton = document.getElementById('resume');
		if (e.target.closest('button') === resumeButton) {
			this.resume();
		}
	}

	resume() {
		if (!this.paused) return;
		this.pauseMenu.style.display = 'none';
		this.paused = false;
		this.start();
	}

	bindKeyHandlers() {
		window.addEventListener('keydown', (e) => {
			this.input.press(e.code);
			if (e.code === 'KeyP') {
				if (!e.repeat) this.paused ? this.resume() : this.pause();
				return;
			}
			// Ignore actions while paused or on the game-over screen, and
			// ignore key-repeat so held keys only fire their action once.
			// Left/Right/Down are resolved from held state each tick.
			if (!this.running || e.repeat) return;
			this.handleAction(e.code);
		});
		window.addEventListener('keyup', (e) => {
			this.input.release(e.code);
		});
		window.addEventListener('blur', () => this.input.clear());
	}

	handleAction(code) {
		const slime = this.game.slime;
		switch (code) {
			case 'Space':
				slime.resetStats();
				break;
			case 'ArrowUp':
				this.game.jump();
				break;
			case 'KeyD':
				if (slime.dashCount >= slime.dashCountMax && slime.color === 'yellow') {
					this.game.frame = 0;
					slime.move('dash');
				}
				break;
			case 'KeyF':
				this.absorbPad();
				break;
			case 'KeyA':
				slime.move('meleeAttack');
				this.game.frame = 0;
				break;
			case 'KeyS':
				slime.move('rangedAttack');
				this.game.frame = 0;
				break;
			case 'KeyR':
				this.game.resetRoom();
				break;
		}
	}

	absorbPad() {
		const slime = this.game.slime;
		const pad = slime.floorColor;
		if (!pad || slime.color !== 'blue') return;
		switch (pad.color) {
			case 'red':
				slime.vel[1] *= -1;
				slime.grav_dir = -1;
				slime.color = 'red';
				break;
			case 'orange':
				slime.color = 'orange';
				break;
			case 'yellow':
				slime.dashCountMax = 1;
				slime.color = 'yellow';
				break;
			case 'green':
				slime.color = 'green';
				if (slime.health < slime.maxHealth) {
					let diff = slime.maxHealth - slime.health;
					diff > 20 ? (slime.health += 20) : (slime.health += diff);
					pad.color = 'clear';
					slime.radiusCheck();
				}
				break;
			case 'violet':
				slime.color = 'violet';
				slime.ignoreCollision = true;
				break;
			case 'pink':
				slime.jumpCountMax = 2;
				slime.jumpCount = 2;
				slime.color = 'pink';
				break;
		}
	}
}
