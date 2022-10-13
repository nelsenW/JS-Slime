export class Blob {
	constructor(canvas) {
		this.canvas = canvas;
		this.radius = Math.random() * 120 + 30;
		this.pos = [
			this.radius * 2 + Math.random() * (this.canvas.width - this.radius * 4),
			-this.radius,
		];
		this.vel = [Math.random() * 0.2 - 0.1, Math.random() * 0.5 + 0.5];
		this.range = Math.random() * 30;
		this.gravity = Math.random(0 * 0.005);
		this.color = 'purple';
	}

	update() {
		if (
			this.pos[0] < this.radius ||
			this.pos[0] > this.canvas.width - this.radius
		) {
			this.vel[0] *= -1;
		}
		if (this.pos[1] > this.canvas.height + this.radius) {
			this.pos[1] = -this.radius;
			this.vel[1] = Math.random() * 0.5 + 0.5;
			this.pos[0] =
				this.radius * 2 + Math.random() * (this.canvas.width - this.radius * 4);
		}
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
	}

	draw(ctx) {
		// ctx.fillStyle = `rgb(${this.color[0]},${this.color[1]},${this.color[2]})`
		ctx.fillStyle = 'blue';
		ctx.beginPath();
		ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
		ctx.fill();
	}
}
