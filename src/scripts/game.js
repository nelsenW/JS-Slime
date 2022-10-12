import Slime from "./slime.js";
import {Level, Door} from "./level.js";
import {LEVELS} from './levelsList'

export class Game{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.slime = new Slime([this.canvas.width * 0.54 , this.canvas.height * 0.42],this, this.ctx, this.canvas);
        this.currentLevel = 1;
        this.level = new Level(this.ctx, this.canvas, LEVELS[this.currentLevel], this.slime);
        this.frame = 0;
        this.stagger = 5;
        this.monitor = document.querySelector('.monitor')
        this.scoreFrame = document.querySelector('.score')
        this.healthFrame = document.querySelector('.health')
        this.scoreText = document.getElementById('score')
        this.healthText = document.getElementById('health')
        this.deathFrame = document.querySelector('.deaths')
        this.deathText = document.getElementById('deaths')
        this.deaths = 0;
        this.score = 0;
        this.allObjects = this.level.objects;
        this.tutorialFinished = false;
        this.generateLevel();
    }

    step(){
       this.moveObjects();
       this.checkCollisions(); 
    }

    draw(ctx, canvas){
        this.level.score--;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.allObjects.forEach( obj => {
            obj.animate(this.frame, this.stagger)
        })
        this.slime.animate(this.frame, this.stagger)
        if(this.currentLevel >= 9){
            this.scoreFrame.style.display = 'inline';
            this.healthFrame.style.display = 'inline';
            this.deathFrame.style.display = 'inline';
            this.deathText.textContent = this.deaths;
            this.scoreText.textContent = this.score;
            this.healthText.textContent = this.slime.health;
        }
        this.frame++
    }

    moveObjects(){
       this.slime.updatepos()
    }

    checkCollisions(){
        for(let i = 0; i < this.allObjects.length; i++){
            this.slime.isCollidedWith(this.allObjects[i])
            if(this.slime.exited && this.tutorialFinished === true){
                this.nextLevel()
            }
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

    nextLevel(){
        this.score += this.level.score
        this.slime.exited = false
        this.currentLevel++;
        this.level = new Level(this.ctx, this.canvas, LEVELS[this.currentLevel], this.slime);
        this.allObjects = this.level.objects;
        this.monitor.style.size = '' /// variable monitor size based on tile size
        this.slime.resetStats();
        this.slime.roomHealth = this.slime.health;
        this.tutorialFinished = false
        this.generateLevel();
    }

    async generateLevel(){
        const monitorText = document.querySelector('#monitor-text')
        monitorText.textContent = ''

        let textArr = this.level.monitorText

        for(let i = 0; i < textArr.length; i++){
            await this.typeSpeed(50);
            monitorText.textContent += textArr[i];
        }

        this.allObjects[this.allObjects.findIndex(el => el instanceof Door)].color = 'aliceblue';
        this.tutorialFinished = true
    }
    typeSpeed = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

} 