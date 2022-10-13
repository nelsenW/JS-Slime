# Background: 
Slime JS is a Vanilla Javascript game utilizing only HTML 5 canvas, JS, and CSS to create a rouguelite 2D platformer with the main character being a Slime. The main objective of the game is to escape the labratory you are being held in (against your will). The key mechanic of the game revolves around the slime being able to absorb properties of different panels and therefore be able to activate different abilities.

By using 2d sprite mapping the slime will be able to change colors dynamically based on the absorbed properties and then utilizing a normal map and custom dynamic lighting the details will be added.

# Functionality & MVPs
In Slime JS, users will be able to:

* Run and jump
* Switch colors
* Utilize different properties of colors 
* Transition between levels 
* Attack enemies with both ranged and melee attacks


In addition, this project will include:

* Instructions for how to play the game
* A production README 
* A pause menu
* A tutorial


# Wireframe: 
![Alt text](src/images/Screen%20Shot%202022-10-13%20at%2010.45.43%20AM.png?raw=true "Wireframe")

* The about section will include liks to the Github repo, my LinkedIN and potentially my Devsite
* Menu will include an instructions, and settings toggle, with settings for fullscreen and sound
    -potential bonus feature of a tutorial skip and difficulty level
* Start game will cause an animation that splays into the tutorial


# Technologies, Libraries, APIs 
This project will be implemented with the following technologies:

 * The Canvas API to render the game board
 * Webpack and Babel to bundle and transpile the source JavaScript code
 * npm to manage project dependencies


# Implementation Timeline:

Thursday: Develop wireframe and project outline while also setting up the project and getting webpack running. In the afternoon a simple initial slime sprite will be generated to be used instead of a base circle.

Friday: Friday will revolve around making the base physics and background mechanics of the game. The character should be movable at this point and respond to gravity and collisions with walls and floors. Extra time will be used to draw out background sprites.  

Saturday: Today will be used to brainstorm additional tasks that need to be accomplished, bugfix and also work out the 2d sprite mapping.

Sunday: The majority of time spent will be on artwork but any additonal time will be spent in polishing up moving physics and making a more realistic engine for the physics.

Monday: Since we should have a movable sprite and the artwork for the essentials this day should be used for setting up transition between levels and making a level schema. All levels should be easily implementable and beating one level should allow you to go to the next floor.

Tuesday: If everything else is working well we will now move on to bonus features such as a pause menu  and rougelite elements and potentially the introuction of a boss fight.

Wednesday: Pause menu should be available and the majority of the day will be spent polishing up the game.

Thursday(morning): Make jello and upload to Heroku or other hosting website, rewrite the proposal as a production README.

Thursday(afternoon): Present and serve jello.


Bonus features:
As the game develops it make take different shapes much like our humble slime. Hence the bonus features could change but things I would like to implement:

* dynamic lighting (from Normal Map)
* combination of abilities 
* 2d softbody mesh for the slime
