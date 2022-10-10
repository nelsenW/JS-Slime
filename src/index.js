import GameView from "./scripts/game_view.js"


document.addEventListener("DOMContentLoaded", () =>{
    const startGame = document.getElementById("startgame")
    const startMenu = document.querySelector(".start-menu")
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    const slimeColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink']
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let newGameView = new GameView(ctx, canvas);
    newGameView.start(); 

    let i = 5

   
    let slimeHomeColors = setInterval(() => {
        newGameView.game.slime.color = slimeColors[i % 7]
        i++ 
    }, 500)
    

    
    startGame.addEventListener("click", () => {
        clearInterval(slimeHomeColors)
        newGameView.game.slime.color = 'blue'
        startMenu.style.display = "none"
        newGameView.bindKeyHandlers();
        newGameView.game.slime.gravity = 0.98
    })
})
