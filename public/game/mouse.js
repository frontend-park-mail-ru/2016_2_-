(function () {
  'use strict';

  class Mouse {

    /**
     * Конструктор класса Pane
     */
    constructor(game) {
      // get data from game
      this.game = game;

      // apple object
      this.pos = {
        x: 300,
        y: 300
      };
    }


    render() {
      if (this.pos.x != -1 && this.pos.y != -1) {
        this.game.context.beginPath();
        this.game.context.fillStyle = 'black';
        this.game.context.arc(this.pos.x + this.game.cellSize / 2, this.pos.y + this.game.cellSize / 2, this.game.cellSize / 2 - 2, 0, Math.PI * 2);
        this.game.context.fill();
        this.game.context.closePath();
      }
    }

    getRandomCoord() {
      return {
        x: Math.floor(Math.random() * this.game.canvasWidth),
        y: Math.floor(Math.random() * this.game.canvasHeight)
      };
    }

    create() {
      // set new apple pos
      var newPos = this.getRandomCoord();
      console.log(newPos);
      // not on previous pos
      if (newPos.x == this.pos.x && newPos.y == this.pos.y) {
        newPos = this.getRandomCoord();
        return;
      }

      // not on snake
      for (var i = 0; i < this.game.Snake.getSize(); i++) {
        if (newPos.x == this.game.Snake.body[i].x && newPos.y == this.game.Snake.body[i].y) {
          newPos = this.getRandomCoord();
          return;
        }
      }

      // update
      this.pos.x = newPos.x;
      this.pos.y = newPos.y;
    }


    remove() {
      this.pos.x = -1;
      this.pos.y = -1;
    }


  }

  //export
  window.Mouse = Mouse;
})();