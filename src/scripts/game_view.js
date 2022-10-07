import Game from "./game.js"

export default class GameView {
    constructor(ctx, canvas){
        this.ctx = ctx;
        this.canvas = canvas
        this.game = new Game(this.ctx, this.canvas);
    }

    start(){
        this.bindKeyHandlers();
        setInterval(() => {
            this.game.draw(this.ctx, this.canvas);
        }, this.game.gameSpeed);
    }

    bindKeyHandlers (){
        window.addEventListener("keydown", (e) => {
            switch(e.code){
                case "ArrowUp":
                    this.game.slime.move("jump")
                    break;
                case "ArrowLeft": 
                    this.game.slime.move("move left")
                    break;
                case "ArrowRight":
                    this.game.slime.move("move right")
                    break;
                case "ArrowDown":
                    this.game.slime.move("crouch")
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