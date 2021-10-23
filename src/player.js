export default class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 10;
        this.height = 10;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: gameWidth / 2,
            y: gameHeight / 2,
        }
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
