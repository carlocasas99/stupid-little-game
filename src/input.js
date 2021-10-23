export default class InputHandler {
    constructor(player) {
      document.addEventListener("keydown", event => {
        switch (event.keyCode) {
          case 65:
            player.moveLeft();
            break;
  
          case 68:
            player.moveRight();
            break;

          case 83:
            player.moveUp();
            break;

          case 87:
            player.moveDown();
            break;
        }
      });
    }
  }
  