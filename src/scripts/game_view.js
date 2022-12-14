import { Game } from './game.js';
import { ColorPad } from './color_pads.js';
import { Level } from './level.js';
import { LEVELS } from './levelsList.js';

export default class GameView {
	constructor(ctx, canvas) {
		this.ctx = ctx;
		this.canvas = canvas;
		this.game = new Game(this.ctx, this.canvas);
		this.paused = false;
		this.pauseMenu = document.getElementById('pause-menu');
		this.gameOverScreen = document.querySelector('.game-over-screen');
		this.gameOverMenu = document.querySelector('#game-over-menu');
		this.finalScore = document.getElementById('final-score');
		this.pauseMenu.addEventListener('click', this.pauseCallback.bind(this));
	}

	start() {
		window.requestAnimationFrame(this.gameLoop.bind(this));
	}

	gameLoop() {
		if (this.paused) return;
		if (this.game.checkGameStatus()) {
			this.gameOverScreen.style.display = 'flex';
			this.gameOverMenu.style.display = 'flex';
			this.finalScore.textContent = this.game.score;
			window.cancelAnimationFrame(this.gameLoop);
			return;
		}
		this.game.step();
		this.game.draw(this.ctx, this.canvas);
		window.requestAnimationFrame(this.gameLoop.bind(this));
	}

	pause() {
		this.pauseMenu.style.display = 'flex';
		this.paused = true;
	}

	pauseCallback(e) {
		const resumeButton = document.getElementById('resume');
		if (e.target === resumeButton) {
			this.resume();
		}
	}

	resume() {
		this.pauseMenu.style.display = 'none';
		this.paused = false;
		this.gameLoop();
	}

	bindKeyHandlers() {
		window.addEventListener('keydown', (e) => {
			switch (e.code) {
				case 'Space':
					this.game.slime.resetStats();
					break;
				case 'ArrowUp':
					if (this.game.slime.landing === true) {
						this.game.frame = 0;
					}
					this.game.slime.move('jump');
					break;
				case 'ArrowLeft':
					this.game.slime.move('move left');
					break;
				case 'ArrowRight':
					this.game.slime.move('move right');
					break;
				case 'ArrowDown':
					if (this.game.frame > 45) {
						this.game.frame = 0;
					} else if (this.game.frame > 40) {
						this.game.frame = 40;
					}
					this.game.slime.move('crouch');
					break;
				case 'KeyD':
					if (
						this.game.slime.dashCount >= this.game.slime.dashCountMax &&
						this.game.slime.color === 'yellow'
					) {
						this.game.frame = 0;
						this.game.slime.move('dash');
					}
					break;
				case 'KeyF':
					let floorColor = this.game.slime.floorColor.color;
					if (this.game.slime.color === 'blue') {
						switch (floorColor) {
							case 'red':
								this.game.slime.vel[1] *= -1;
								this.game.slime.grav_dir = -1;
								this.game.slime.color = 'red';
								break;
							case 'orange':
								this.game.slime.color = 'orange';
								break;
							case 'yellow':
								this.game.slime.dashCountMax = 1;
								this.game.slime.color = 'yellow';
								break;
							case 'green':
								this.game.slime.color = 'green';
								if (this.game.slime.health < this.game.slime.maxHealth) {
									let diff = this.game.slime.maxHealth - this.game.slime.health;
									diff > 20
										? (this.game.slime.health += 20)
										: (this.game.slime.health += diff);
									this.game.allObjects[
										this.game.allObjects.findIndex(
											(el) => el instanceof ColorPad && el.color === 'green'
										)
									].color = 'clear';
									this.game.slime.radiusCheck();
								}
								break;
							case 'violet':
								this.game.slime.color = 'violet';
								this.game.slime.ignoreCollision = true;
								break;
							case 'pink':
								this.game.slime.jumpCountMax = 2;
								this.game.slime.jumpCount = 2;
								this.game.slime.color = 'pink';
								break;
						}
					}
					break;
				case 'KeyP':
					this.pause();
					break;
				case 'KeyA':
					this.game.slime.move('meleeAttack');
					this.game.frame = 0;
					break;
				case 'KeyS':
					this.game.slime.move('rangedAttack');
					this.game.frame = 0;
					break;
				case 'KeyR':
					this.game.deaths++;
					this.game.score -= 1000;
					this.game.slime.health = this.game.slime.roomHealth;
					this.game.slime.resetStats();
					this.game.slime.radiusCheck();
					this.game.level = new Level(
						this.ctx,
						this.canvas,
						LEVELS[this.game.currentLevel],
						this.game.slime
					);
					break;
			}
		});
		window.addEventListener('keyup', (e) => {
			switch (e.code) {
				case 'ArrowRight':
					this.game.slime.move('stop');
					break;
				case 'ArrowLeft':
					this.game.slime.move('stop');
					break;
				case 'ArrowDown':
					this.game.slime.move('stop');
					break;
			}
		});
	}
}
