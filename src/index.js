import Player from './player.js';
import InputHandler from './input.js'
// Canvas Setup
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let player = new Player(GAME_WIDTH, GAME_HEIGHT);

let t = 0;

new InputHandler(player);

function gameLoop(timeStamp) {
    let deltaTime = timeStamp - t;
    ctx.clearRect(0, 0, 800, 600);
    player.update(deltaTime)
    player.draw(ctx);
    requestAnimationFrame(gameLoop);
}
gameLoop();
// Keyboard Interaction
// Player
// Animation Loop