import Slime from "./slime.js";
import Level from "./level.js";

const LEVELS = {
    1: {
        monitorText: 'Welcome to the test lab subject #8X75G2, please proceed to the right to begin testing...',
        platforms: [{pos: [0, 0.9], width: 1, height: 0.1}],
        colorPads: [],
        exitDoor: {pos: [0.95, 0.85], width: 0.05, height: 0.05}
    },
    2: {
        monitorText: 'For each test all we need to do is make it to the other side of the room...',
        platforms: [{pos: [0, 0.9], width: 1, height: 0.1}],
        colorPads: [],
        exitDoor: {pos: [0.95, 0.85], width: 0.05, height: 0.05}
    },
    3: {
        monitorText: 'To move back and forth in the current room use the arrow keys to your advantage...               Idiot.',
        platforms: [{pos: [], width: 0, height: 0}],
        colorPads: []
    },
    4: {

    },
    5:{

    }
}

export default class Game{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.slime = new Slime([this.canvas.width * 0.54 , this.canvas.height * 0.42],this, this.ctx, this.canvas);
        this.currentLevel = 1;
        this.level = new Level(this.ctx, this.canvas, LEVELS[this.currentLevel]);
        this.frame = 0;
        this.stagger = 5;
        this.allObjects = [];
        this.generateLevel();
    }

    step(){
       this.moveObjects();
       this.checkCollisions(); 
    }

    draw(ctx, canvas){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.allObjects.forEach( obj => {
            obj.animate(this.frame, this.stagger)
        })
        this.frame++
    }

    moveObjects(){
       this.slime.updatepos()
    }

    checkCollisions(){
        for(let i = 0; i < this.allObjects.length; i++){
            this.slime.isCollidedWith(this.allObjects[i])
        }
        
    }

    checkGameStatus(){
        if (this.slime.pos[1] > this.canvas.height){
            return true
        } 
        if (this.slime.health <= 0){
            return true 
        }
        return false
    }

    async generateLevel(){
        this.level.optionsBreaker(LEVELS[this.currentLevel])
        this.allObjects = this.allObjects.concat(this.level.objects).concat(this.slime)
        const monitorText = document.querySelector('#monitor-text')

        let textArr = this.level.monitorText

        for(let i = 0; i < textArr.length; i++){
            await this.typeSpeed(100);
            monitorText.textContent += textArr[i];
        }
    }
    typeSpeed = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

} 