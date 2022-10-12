import {LEVELS} from "./scripts/game.js";
import GameView from "./scripts/game_view.js"
import { Level } from "./scripts/level.js";


document.addEventListener("DOMContentLoaded", () =>{
    const startGame = document.getElementById("startgame");
    const startMenu = document.querySelector(".start-menu");
    const closeButton = document.getElementById("close-button");
    const closeButton2 = document.getElementById("close-button2");
    const about = document.getElementById('about');
    const aboutMenu = document.querySelector('.about-menu');
    const controls = document.querySelector('#controls');
    const controlsMenu = document.querySelector('.controls-menu');
    const gameOverScreen = document.querySelector('.game-over-screen');
    const gameOverMenu = document.querySelector('#game-over-menu');
    const retry = document.getElementById('retry')

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');
    const slimeColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'pink']
    
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let newGameView = new GameView(ctx, canvas);
        newGameView.start(); 
    
    retry.addEventListener("click", () =>{
        gameOverScreen.style.display = 'none';
        gameOverMenu.style.display = 'none';
        newGameView.game.deaths++
        newGameView.game.score -= 1000;
        newGameView.game.level = new Level(ctx, canvas, LEVELS[newGameView.game.currentLevel], newGameView.game.slime)
        newGameView.start();
        startFunc();
    })

    let i = 5
    let slimeHomeColors = setInterval(() => {
        newGameView.game.slime.color = slimeColors[i % 7]
        i++ 
    }, 500);

    const startFunc = () => {
        newGameView.game.slime.color = 'blue';
        newGameView.bindKeyHandlers();
        newGameView.game.slime.gravity = 0.98
    }
    
    startGame.addEventListener("click", () => {
        clearInterval(slimeHomeColors);
        startMenu.style.display = "none";
        startFunc()
    });

    about.addEventListener("click", () => {
        startMenu.style.display = 'none';
        aboutMenu.style.display = 'flex';
    });

    controls.addEventListener("click", () => {
        startMenu.style.display = 'none';
        controlsMenu.style.display = 'flex';
    });

    closeButton.addEventListener("click", () =>{
        aboutMenu.style.display = 'none';
        startMenu.style.display = 'flex';
    });

    closeButton2.addEventListener("click", () =>{
        startMenu.style.display = 'flex';
        controlsMenu.style.display = 'none';
    });

})
