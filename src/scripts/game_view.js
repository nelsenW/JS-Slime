import Game from "./game.js"

export default class GameView {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas;
        this.game = new Game(this.ctx, this.canvas);
        this.paused = false;
        this.pauseMenu = document.getElementById("pause-menu");
        this.pauseMenu.addEventListener('click', this.pauseCallback.bind(this));
    }

    start(){
        this.bindKeyHandlers();
        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

    gameLoop() {
        if(this.paused) return;
        this.game.draw(this.ctx, this.canvas);
        window.requestAnimationFrame(this.gameLoop.bind(this))
    }

    pause(){
        this.pauseMenu.style.display = "flex";
        this.paused = true;
    }

    pauseCallback(e){
        const resumeButton = document.getElementById("resume");
        if(e.target === resumeButton){
            this.resume();
        }
    }

    resume(){
        this.pauseMenu.style.display = "none";
        this.paused = false;
        this.gameLoop()
    }

    bindKeyHandlers (){
        window.addEventListener("keydown", (e) => {
            switch(e.code){
                case "Space":
                    this.game.slime.color = "blue";
                    break;
                case "ArrowUp":
                    if(this.game.slime.landing === true){
                        this.game.frame = 0;
                    }
                    this.game.slime.move("jump");
                    break;
                case "ArrowLeft": 
                    this.game.slime.move("move left");
                    break;
                case "ArrowRight":
                    this.game.slime.move("move right");
                    break;
                case "ArrowDown":
                    this.game.slime.move("crouch");
                    break;
                case "KeyF":
                      let floorColor = this.game.slime.floorColor()
                      console.log(floorColor)
                      if(this.game.slime.color === "blue"){
                        switch(floorColor[0]){
                        case 215:
                            this.game.slime.color = "red";
                            break;
                        case 235:
                            this.game.slime.color = "orange";
                            break;
                        case 237:
                            this.game.slime.color = "yellow";
                            break;
                        case 11:
                            this.game.slime.color = "green";
                            break;
                        case 12:
                            this.game.slime.color = "indigo";
                            break;
                        case 57:
                            this.game.slime.color = "violet";
                            break;
                        case 255:
                            this.game.slime.color = "pink";
                            break;
                      }
                      }
                      
                    break;
                case "KeyP":
                    this.pause();
                    break;
            }
        });
        window.addEventListener("keyup", (e)=>{
            switch(e.code){
                case "ArrowRight":
                    this.game.slime.move("stop")
                    break;
                case "ArrowLeft": 
                    this.game.slime.move("stop")
                    break;
        }
        });
    }
}