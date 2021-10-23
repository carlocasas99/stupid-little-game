import Player from './player.js';
// Canvas Setup
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.clearRect(0, 0, 800, 600);

let player = new Player(GAME_WIDTH, GAME_HEIGHT);
player.draw(ctx);
// Keyboard Interaction
// Player
// Animation Loop