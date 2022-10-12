
export class Blob {
    constructor(canvas){
        this.canvas = canvas;
        this.radius = Math.random() * 120 + 30;
        this.x = this.radius * 2 + (Math.random() * (this.canvas.width - this.radius *4));
        this.y = -this.radius;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.5 +0.5;
        this.va = Math.random() * 0.1 - 0.05;
        this.range = Math.random() * 30;
        this.gravity = Math.random(0 * 0.005);
        this.vy = 0;
    }

    update(){
        if(this.x < this.radius || this.x > this.canvas.width - this.radius){
            this.speedX *= -1
        }
        if(this.y > this.canvas.height + this.radius){
            this.y = -this.radius;
            this.vy = 0;
            this.speedY = Math.random() * 0.5 + 0.5;
            this.x = this.radius * 2 + (Math.random() * (this.canvas.width - this.radius *4));
        }
        if(this.y > this.radius){
            this.vy += this.gravity;
            this.speedY += this.vy;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}


