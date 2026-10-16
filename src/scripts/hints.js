import { getSlimeSheet } from './slime_sprites';
import { ANIMATIONS } from './slime';

// Isaac-style control hints drawn on the room background: a word, a grey
// slime acting it out, and the key(s) to press. Positions are in tile units
// so they scale with the room.
const HINTS = {
	move: { word: 'MOVE', state: 'move', keys: ['left', 'right'] },
	jump: { word: 'JUMP', state: 'jump', keys: ['up'] },
	doubleJump: { word: 'DOUBLE JUMP', state: 'jump', keys: ['up', 'up'], color: 'pink' },
	// from/to animate a colour change on a key press; omitted means grey.
	absorb: { word: 'ABSORB', state: 'idle', keys: ['F'], to: 'red' },
	dash: { word: 'DASH', state: 'dash', keys: ['D'], color: 'yellow', speedLines: true },
	reset: { word: 'RESET COLOR', state: 'idle', keys: ['SPACE'], from: 'pink' },
	heal: { word: 'HEAL', state: 'idle', keys: ['F'], to: 'green', grow: true, caption: 'one use' },
	spikes: { word: 'SPIKES HURT', state: 'hurt', keys: [], spikes: true },
	wallClimb: {
		word: 'WALL CLIMB',
		state: 'jump',
		keys: ['right', 'up'],
		color: 'orange',
		climb: true,
		caption: 'hold both',
	},
};

const CLIMB_CYCLE = 90;

const INK = '#4a525c';
const PAPER = '#f0f8ff';
const ALPHA = 0.5;

// Colour-change loop, in ticks (60/s): idle, press the key, turn colour, hold, fade back.
const ABSORB_CYCLE = 180;
const PRESS_START = 50;
const PRESS_END = 75;
const TINT_START = 60;
const TINT_IN = 12;
const TINT_HOLD_END = 150;
const TINT_OUT = 15;

const colorChangePhase = (frame) => {
	const t = frame % ABSORB_CYCLE;
	const pressed = t >= PRESS_START && t < PRESS_END;
	let tint = 0;
	if (t >= TINT_START && t < TINT_START + TINT_IN) tint = (t - TINT_START) / TINT_IN;
	else if (t >= TINT_START + TINT_IN && t < TINT_HOLD_END) tint = 1;
	else if (t >= TINT_HOLD_END && t < TINT_HOLD_END + TINT_OUT)
		tint = 1 - (t - TINT_HOLD_END) / TINT_OUT;
	return { pressed, tint };
};

const drawArrow = (ctx, x, y, size, dir) => {
	const angle = { up: -Math.PI / 2, right: 0, down: Math.PI / 2, left: Math.PI }[dir];
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(angle);
	ctx.beginPath();
	ctx.moveTo(size * 0.5, 0);
	ctx.lineTo(-size * 0.3, -size * 0.4);
	ctx.lineTo(-size * 0.3, size * 0.4);
	ctx.closePath();
	ctx.fill();
	ctx.restore();
};

const drawKey = (ctx, x, y, unit, label, pressed = false) => {
	const h = unit * 0.4;
	const w = label === 'SPACE' ? unit * 1.5 : h;
	const r = unit * 0.06;
	if (pressed) y += unit * 0.03;
	ctx.save();
	ctx.lineWidth = Math.max(2, unit * 0.025);
	ctx.beginPath();
	ctx.roundRect(x - w / 2, y - h / 2, w, h, r);
	ctx.stroke();
	if (pressed) {
		// Highlighted: solid key with the label knocked out.
		ctx.globalAlpha = Math.min(1, ctx.globalAlpha * 1.6);
		ctx.fill();
		ctx.fillStyle = PAPER;
	}
	if (['left', 'right', 'up', 'down'].includes(label)) {
		drawArrow(ctx, x, y, h * 0.45, label);
	} else {
		ctx.font = `${Math.round(unit * (label === 'SPACE' ? 0.17 : 0.22))}px "Fredoka One", sans-serif`;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(label, x, y + unit * 0.01);
	}
	ctx.restore();
	return w;
};

export const drawHints = (ctx, canvas, level, frame) => {
	if (!level.hints.length) return;
	const tileW = canvas.width / level.cols;
	const tileH = canvas.height / level.rows;
	const unit = tileH;
	const sheetFor = (color) => getSlimeSheet(color || 'grey');

	ctx.save();
	ctx.globalAlpha = ALPHA;
	ctx.fillStyle = INK;
	ctx.strokeStyle = INK;

	for (const { type, at } of level.hints) {
		const hint = HINTS[type];
		const cx = at[0] * tileW;
		const cy = at[1] * tileH;
		const slimeSize = unit;

		// Word
		ctx.font = `${Math.round(unit * 0.3)}px "Fredoka One", sans-serif`;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'alphabetic';
		ctx.fillText(hint.word, cx, cy - slimeSize / 2 - unit * 0.08);

		// Slime acting it out
		const frames = ANIMATIONS[hint.state];
		const position = Math.floor(frame / 8) % frames;
		const row = Object.keys(ANIMATIONS).indexOf(hint.state);
		// Anchored at the bottom centre so a growing slime grows upward.
		const drawSlime = (img, alpha, scale = 1, dx = 0, dy = 0) => {
			if (alpha <= 0) return;
			const size = slimeSize * scale;
			ctx.globalAlpha = ALPHA * alpha;
			ctx.drawImage(
				img,
				128 * position,
				128 * row,
				128,
				128,
				cx - size / 2 + dx,
				cy + slimeSize / 2 - size + dy,
				size,
				size
			);
			ctx.globalAlpha = ALPHA;
		};
		// Colours are drawn at the faint hint opacity, so they read as a
		// washed-out version of the real slime.
		let keyPressed = false;
		if (hint.from || hint.to) {
			const { pressed, tint } = colorChangePhase(frame);
			keyPressed = pressed;
			const scale = hint.grow ? 0.7 + 0.3 * tint : 1;
			drawSlime(sheetFor(hint.from), 1 - tint, scale);
			drawSlime(sheetFor(hint.to), tint, scale);
		} else if (hint.climb) {
			// Slime sliding up a wall on its right, looping.
			const wallX = cx + slimeSize * 0.3;
			const wallW = unit * 0.14;
			// Wall spans the band between the word and the keys.
			ctx.fillRect(wallX, cy - slimeSize * 0.42, wallW, slimeSize * 0.78);
			const rise = ((frame % CLIMB_CYCLE) / CLIMB_CYCLE) * slimeSize * 0.2;
			drawSlime(sheetFor(hint.color), 1, 0.8, -slimeSize * 0.12, -rise);
		} else {
			drawSlime(sheetFor(hint.color), 1);
		}
		if (hint.spikes) {
			const w = unit * 0.24;
			const y = cy + slimeSize / 2 + unit * 0.3;
			for (let i = -1; i <= 1; i++) {
				const x = cx + i * w;
				ctx.beginPath();
				ctx.moveTo(x - w / 2, y);
				ctx.lineTo(x, y - w);
				ctx.lineTo(x + w / 2, y);
				ctx.closePath();
				ctx.fill();
			}
		}
		if (hint.speedLines) {
			ctx.lineWidth = Math.max(2, unit * 0.025);
			for (const dy of [-0.12, 0.02, 0.16]) {
				const x0 = cx - slimeSize * 0.45;
				ctx.beginPath();
				ctx.moveTo(x0 - unit * 0.35, cy + dy * unit);
				ctx.lineTo(x0, cy + dy * unit);
				ctx.stroke();
			}
		}

		// Key(s)
		const keyY = cy + slimeSize / 2 + unit * 0.12;
		const gap = unit * 0.5;
		hint.keys.forEach((key, i) => {
			const offset = (i - (hint.keys.length - 1) / 2) * gap;
			drawKey(ctx, cx + offset, keyY, unit, key, keyPressed);
		});
		if (hint.caption) {
			ctx.font = `${Math.round(unit * 0.15)}px "Fredoka One", sans-serif`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'top';
			ctx.fillText(hint.caption, cx, keyY + unit * 0.27);
		}
	}
	ctx.restore();
};
