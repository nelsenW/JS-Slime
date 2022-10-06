import GameView from "./scripts/game_view.js"


document.addEventListener("DOMContentLoaded", () =>{
    const startGame = document.getElementById("startgame")
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let newGameView = new GameView(ctx, canvas);
    
    startGame.addEventListener("click", () => {
      newGameView.start(); 
    })
})
