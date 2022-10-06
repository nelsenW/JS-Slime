import Game from "./game.js"

export default class GameView {
    constructor(ctx){
        this.game = new Game();
        this.ctx = ctx;
        this.gameSpeed = 20;
    }

    start(){
        setInterval(() => {
            this.game.draw(this.ctx);
        }, this.gameSpeed);
    }
}