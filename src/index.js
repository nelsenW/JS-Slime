import { Blob } from './scripts/home_animation';
import { LEVELS } from './scripts/levelsList';
import GameView from './scripts/game_view.js';
import Slime from './scripts/slime.js';
import { getSlimeSheet } from './scripts/slime_sprites.js';
import { setHighlightColor } from './scripts/color_pads.js';

document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body');
	const startGame = document.getElementById('startgame');
	const startMenu = document.querySelector('.start-menu');
	const closeButton = document.getElementById('close-button');
	const closeButton2 = document.getElementById('close-button2');
	const closeButton3 = document.getElementById('close-button3')
	const about = document.getElementById('about');
	const aboutMenu = document.querySelector('.about-menu');
	const controls = document.querySelectorAll('.controls');
	const controlsMenu = document.querySelector('.controls-menu');
	const gameOverScreen = document.querySelector('.game-over-screen');
	const gameOverMenu = document.querySelector('#game-over-menu');
	const mainMenuButtons = document.querySelectorAll('.main-menu');
	const monitor = document.querySelector('.monitor');
	const retry = document.getElementById('retry');
	const levelSelectorList = document.querySelector("#levels-selector-list")
	const levels = document.getElementById('levels')
	const levelSelector = document.querySelector(".levels-selector")

	const canvas = document.querySelector('#canvas');
	const canvas2 = document.getElementById('canvas2');
	const ctx2 = canvas2.getContext('2d');
	const ctx = canvas.getContext('2d');
	const slimeColors = [
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'violet',
		'pink',
	];

	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;

	// The menu slime has a fixed size so it stays put in the fixed-size menu.
	const MENU_SLIME_SIZE = 128;
	canvas2.height = MENU_SLIME_SIZE;
	canvas2.width = MENU_SLIME_SIZE;

	let newGameView = new GameView(ctx, canvas);

	// Pre-render the recolored slime sheets once the source image is ready.
	const slimeSheet = document.getElementById('slime-sheet');
	if (slimeSheet.complete) getSlimeSheet('blue');
	else slimeSheet.addEventListener('load', () => getSlimeSheet('blue'));

	// Safari/iOS may lack requestFullscreen or reject it; never let that throw.
	const enterFullscreen = (el) => {
		const request = el.requestFullscreen || el.webkitRequestFullscreen;
		if (!request) return;
		try {
			const result = request.call(el);
			if (result && result.catch) result.catch(() => {});
		} catch (err) {}
	};

	window.addEventListener('resize', () => {
		const width = window.innerWidth;
		const height = window.innerHeight;
		if (width === canvas.width && height === canvas.height) return;
		const scaleX = width / canvas.width;
		const scaleY = height / canvas.height;
		canvas.width = width;
		canvas.height = height;
		newGameView.resize(scaleX, scaleY);
	});

	retry.addEventListener('click', () => {
		gameOverScreen.style.display = 'none';
		gameOverMenu.style.display = 'none';
		newGameView.game.resetRoom();
		newGameView.start();
	});

	for(const [key, value] of Object.entries(LEVELS)){
		let btn = document.createElement("button")
		btn.id = `level-${key}`
		btn.dataset.level = key
		btn.textContent = key
		levelSelectorList.appendChild(btn)
	};

	levelSelectorList.addEventListener("click", (e) => {
		const btn = e.target.closest('button');
		if (!btn || !levelSelectorList.contains(btn)) return;
		monitor.style.display = 'flex';
		// monitor.textContent = ''
		canvas.style.filter = 'none';
		canvas.style.backgroundColor = 'aliceblue';
		enterFullscreen(body);
		window.cancelAnimationFrame(slimeLoop);
		slimeLoopCancelled = true;
		clearInterval(slimeHomeColors);
		levelSelector.style.display = 'none'; // delete to go to old cdd
		newGameView.game.nextLevel(Number(btn.dataset.level))
		newGameView.start(); // move up to create better css
		startFunc();
	})


	const startFunc = () => {
		newGameView.game.slime.color = 'blue';
		newGameView.bindKeyHandlers();
		newGameView.game.slime.gravity = 0.98;
	};

	mainMenuButtons.forEach((button) => {
		button.addEventListener('click', () => {
			window.location.reload();
		});
	});

	startGame.addEventListener('click', () => {
		monitor.style.display = 'flex';
		canvas.style.filter = 'none';
		canvas.style.backgroundColor = 'aliceblue';
		enterFullscreen(body);
		window.cancelAnimationFrame(slimeLoop);
		slimeLoopCancelled = true;
		clearInterval(slimeHomeColors);
		startMenu.style.display = 'none'; // delete to go to old cdd
		newGameView.start(); // move up to create better css
		startFunc();
	});

	about.addEventListener('click', () => {
		startMenu.style.display = 'none';
		aboutMenu.style.display = 'flex';
	});

	levels.addEventListener('click', () => {
		startMenu.style.display = 'none';
		levelSelector.style.display = 'flex';
	});

	controls.forEach((control) => {
		control.addEventListener('click', () => {
			startMenu.style.display = 'none';
			controlsMenu.style.display = 'flex';
		});
	});

	closeButton.addEventListener('click', () => {
		aboutMenu.style.display = 'none';
		startMenu.style.display = 'flex';
	});

	closeButton2.addEventListener('click', () => {
		startMenu.style.display = 'flex';
		controlsMenu.style.display = 'none';
	});

	closeButton3.addEventListener('click', () => {
		startMenu.style.display = 'flex';
		levelSelector.style.display = 'none';
	});

	/// chunk
	let slimeLoopCancelled = false;
	let blobArray = [];
	let i = 5;
	let slimeHomeColors = setInterval(() => {
		slime1.color = slimeColors[i % 7];
		setHighlightColor(slime1.color);
		i++;
	}, 500);

	const collect = (num) => {
		for (let i = 0; i < num; i++) {
			blobArray.push(new Blob(canvas));
		}
	};
	collect(30);

	let slime1 = new Slime([0, 0], undefined, ctx2, canvas2);
	slime1.radius = MENU_SLIME_SIZE / 2;
	let frame = 0;

	const slimeLoop = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
		frame++;
		blobArray.forEach((blob) => blob.update());
		blobArray.forEach((blob) => blob.draw(ctx));
		slime1.animate(frame, 5);
		if (!slimeLoopCancelled) {
			setTimeout(() => {
				window.requestAnimationFrame(slimeLoop);
			}, 1000 / 30)
		}
	};

	window.requestAnimationFrame(slimeLoop);

	/// chunk
});
