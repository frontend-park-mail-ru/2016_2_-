(function () {
  'use strict';

  class Snake {

    constructor({game, x, y}) {
      this.game = game;

      // route const
      this.ROUTE = {
        UP: 2,
        DOWN: 0,
        LEFT: 1,
        RIGHT: 3
      };

      // snake body
      var defaultPosX = Math.ceil(this.game.canvasWidth / 2);
      var defaultPosY = Math.ceil(this.game.canvasHeight / 2);

      this.body = [
        {x: defaultPosX, y: defaultPosY - this.game.cellSize},
        {x: defaultPosX, y: defaultPosY},
        {x: defaultPosX, y: defaultPosY + this.game.cellSize}
      ];

      // set route
      this.setRoute('UP');
    }


    setRoute(value) {
      this.route = this.ROUTE[value];
    }


    update() {
      let newSnakeElement = {
        x: this.body[0].x,
        y: this.body[0].y
      };
      if (this.isRoute('UP')) {
        newSnakeElement.y -= this.game.cellSize;//если вверх, то новый элемент появится выше первого
      } else if (this.isRoute('DOWN')) {
        newSnakeElement.y += this.game.cellSize;
      } else if (this.isRoute('LEFT')) {
        newSnakeElement.x -= this.game.cellSize;
      } else if (this.isRoute('RIGHT')) {
        newSnakeElement.x += this.game.cellSize;
      }

      //проверка на самопересечение
      for (var i = 0; i < this.getSize() - 1; i++) {
        if (newSnakeElement.x == this.body[i].x && newSnakeElement.y == this.body[i].y) {
          this.game.setStatus(this.game.STATUS.GAMEOVER);
          return;
        }
      }

      let cellSize = this.game.cellSize;
      //проверка на выход за границы
      if ((newSnakeElement.x < 0 || newSnakeElement.x > this.game.canvasWidth - cellSize)
        || (newSnakeElement.y < 0 || newSnakeElement.y > this.game.canvasHeight - cellSize - 1)) {
        this.game.setStatus(this.game.STATUS.GAMEOVER);
        return;
      }

      this.body.pop();//убираем хвост
      this.body.unshift(newSnakeElement);//добавляем новую голову


      //проверка на наличие в новой клетки мыши
      let mouse = this.game.Mouse.pos;
      let distance = Math.sqrt((newSnakeElement.x - mouse.x) * (newSnakeElement.x - mouse.x) +
        (newSnakeElement.y - mouse.y) * (newSnakeElement.y - mouse.y));
      //console.log(distance);
      if (distance < this.game.cellSize) {
        console.log(distance);
        console.log('mouse in range');
        let isWin = this.addElement();
        if (isWin) {
          this.game.Mouse.remove();
          this.game.setStatus(this.game.STATUS.GAMEWIN);
        } else {
          this.game.Mouse.create();
        }
      }
      return 0;
    }


    render() {
      for (var i = this.getSize() - 1; i != -1; i--) {
        if (i == 0) {
          this.game.context.fillStyle = this.game.snakeHeadColor;
        } else {
          this.game.context.fillStyle = this.game.snakeColor;
        }
        this.game.context.fillRect(this.body[i].x - this.game.cellSize / 2,
          this.body[i].y + this.game.cellSize / 2,
          this.game.cellSize,
          this.game.cellSize);
      }
    }

    addElement() {
      // get place to adding
      var last_index = this.body.length - 1;

      var newSnakeElement = {
        x: this.body[last_index].x,
        y: this.body[last_index].y
      };

      var x_diff = this.body[last_index].x - this.body[last_index - 1].x;
      var y_diff = this.body[last_index].y - this.body[last_index - 1].y;

      if (x_diff > 0) {
        newSnakeElement.x += this.game.cellSize;
      } else if (x_diff < 0) {
        newSnakeElement.x -= this.game.cellSize;
      } else if (y_diff > 0) {
        newSnakeElement.y += this.game.cellSize;
      } else if (y_diff < 0) {
        newSnakeElement.y -= this.game.cellSize;
      }

      // push in array
      this.body.push(newSnakeElement);

      // check on win
      if (this.getSize() == this.game.sceneWidth * this.game.sceneHeight) {
        return true;
      }

      return false;
    }


    getSize() {
      return this.body.length;
    }


    isRoute(value) {
      return this.route == this.ROUTE[value];
    }
  }
  //export
  window.Snake = Snake;
})();