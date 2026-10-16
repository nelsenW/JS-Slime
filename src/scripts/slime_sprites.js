import { COLORS } from './color_pads';

const SHADES = ['lighterShade', 'lightShade', 'baseShade', 'darkShade', 'darkerShade'];
const TOLERANCE = 6;
const sheets = {};

// Finds where a pixel sits on the blue palette ramp (lighter -> darker):
// the pair of neighbouring shades it lies between and how far along. This
// also catches in-between shades in the sheet that aren't in the palette.
const matchShade = (r, g, b) => {
	let best = null;
	let bestDist = TOLERANCE;
	for (let i = 0; i < SHADES.length - 1; i++) {
		const A = COLORS.blue[SHADES[i]];
		const B = COLORS.blue[SHADES[i + 1]];
		const d = [B[0] - A[0], B[1] - A[1], B[2] - A[2]];
		const len2 = d[0] * d[0] + d[1] * d[1] + d[2] * d[2];
		const t = Math.max(
			0,
			Math.min(1, ((r - A[0]) * d[0] + (g - A[1]) * d[1] + (b - A[2]) * d[2]) / len2)
		);
		const dist = Math.hypot(r - (A[0] + t * d[0]), g - (A[1] + t * d[1]), b - (A[2] + t * d[2]));
		if (dist <= bestDist) {
			bestDist = dist;
			best = { index: i, t };
		}
	}
	return best;
};

const shadeAt = (color, { index, t }) => {
	const A = COLORS[color][SHADES[index]];
	const B = COLORS[color][SHADES[index + 1]];
	return [0, 1, 2].map((c) => Math.round(A[c] + t * (B[c] - A[c])));
};

// Builds one recolored copy of the blue slime sheet per color, once.
const buildSheets = (img) => {
	const base = document.createElement('canvas');
	base.width = img.naturalWidth;
	base.height = img.naturalHeight;
	const baseCtx = base.getContext('2d');
	baseCtx.drawImage(img, 0, 0);
	const source = baseCtx.getImageData(0, 0, base.width, base.height);

	// Map each pixel to its blue shade once, then reuse for every color.
	const shadeMap = new Array(source.data.length / 4);
	for (let i = 0; i < source.data.length; i += 4) {
		if (source.data[i + 3] === 0) continue;
		shadeMap[i / 4] = matchShade(
			source.data[i],
			source.data[i + 1],
			source.data[i + 2]
		);
	}

	sheets.blue = img;

	// Desaturated copy for the background control hints.
	const grey = document.createElement('canvas');
	grey.width = base.width;
	grey.height = base.height;
	const greyData = new ImageData(new Uint8ClampedArray(source.data), base.width, base.height);
	for (let i = 0; i < greyData.data.length; i += 4) {
		const d = greyData.data;
		const lum = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
		d[i] = d[i + 1] = d[i + 2] = lum;
	}
	grey.getContext('2d').putImageData(greyData, 0, 0);
	sheets.grey = grey;
	for (const color of Object.keys(COLORS)) {
		if (color === 'blue' || !COLORS[color].baseShade) continue;
		const sheet = document.createElement('canvas');
		sheet.width = base.width;
		sheet.height = base.height;
		const sheetCtx = sheet.getContext('2d');
		const recolored = new ImageData(
			new Uint8ClampedArray(source.data),
			base.width,
			base.height
		);
		for (let p = 0; p < shadeMap.length; p++) {
			const shade = shadeMap[p];
			if (!shade) continue;
			const [r, g, b] = shadeAt(color, shade);
			recolored.data[p * 4] = r;
			recolored.data[p * 4 + 1] = g;
			recolored.data[p * 4 + 2] = b;
		}
		sheetCtx.putImageData(recolored, 0, 0);
		sheets[color] = sheet;
	}
};

export const getSlimeSheet = (color) => {
	const img = document.querySelector('#slime-sheet');
	if (!sheets.blue) {
		if (!img.complete || !img.naturalWidth) return img;
		buildSheets(img);
	}
	return sheets[color] || sheets.blue;
};
