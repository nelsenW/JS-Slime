import Slime from "./slime.js";
import {Level, Door} from "./level.js";

export const LEVELS = {
    1: {
        monitorText: 'Welcome to the test lab subject #8X75G2, please proceed to the right to begin testing...',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#          #        #',
                    '#                   e',
                    '#####################']
    },
    2: {
        monitorText: 'For each test all we need to do is make it to the other side of the room...',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#            #      #',
                    '#          ###      #',
                    '#s       #####      e',
                    '#####################']
    },
    3: {
        monitorText: 'To move back and forth in the current room use the arrow keys to your advantage...               Wait until Im done talking jeez...',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#                   e',
                    '#              ###  #',
                    '#s           # # # ##',
                    '#####################']
    },
    4: {
        monitorText: 'Money is tight so if you are dumb enough to fall in a hole we will just get a new test subject...',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#s                  e',
                    '##########  #########']
    },
    5:{
        monitorText: 'Focus on a pad by pressing F and you should be able to change colors.',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#s                  e',
                    '######r##############']
    },
    6:{
        monitorText: 'Thats a big hole... hot damn. Being pink gives you a double jump btw...',
        tileArray: ['#####################',
                    '#####               #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#                   #',
                    '#s                  e',
                    '######p###     ######']
    },
    7:{
        monitorText: 'yellow on the other hand gives you the ability to dash with the D button',
        tileArray: ['#####################',
                    '#####    #    #     #',
                    '#        #    #     #',
                    '#        #    #     #',
                    '#        #    #     #',
                    '#        ######     #',
                    '#s                  e',
                    '######y## ## # ######']
    },
    8:{
        monitorText: 'Press space to turn blue so you can reabsorb another color',
        tileArray: ['#####################',
                    '#####     #####     #',
                    '#                   #',
                    '#              #    #',
                    '#        y     #    #',
                    '#        #     #    #',
                    '#s       #     #    e',
                    '######p###     ######']
    },
    9:{
        monitorText: 'Now this is testing so we have been scoring you and tracking your vitals... Here they are.',
        tileArray: ['#####################',
                    '#####               #',
                    '#         #         e',
                    '#      #  #  #      #',
                    '#   #     #        ##',
                    '#   ###   #    #    #',
                    '#s#     #           #',
                    '#####################']
    },
}

export class Game{
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.slime = new Slime([this.canvas.width * 0.54 , this.canvas.height * 0.42],this, this.ctx, this.canvas);
        this.currentLevel = 1;
        this.level = new Level(this.ctx, this.canvas, LEVELS[this.currentLevel], this.slime);
        this.frame = 0;
        this.stagger = 5;
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
        this.slime.color = 'blue'
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