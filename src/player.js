export default class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 20;
        this.height = 20;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.position = {
            x: gameWidth / 2,
            y: gameHeight / 2,
        }
    }

    moveLeft() {
        this.position.x -= 5;
    }

    moveRight() {
        this.position.x += 5;
    }

    moveDown() {
        this.position.y -= 5;
    }

    moveUp() {
        this.position.y += 5;
    }

    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(dt) {
        if (!dt) return;
    }
}
