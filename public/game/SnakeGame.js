(function () {
  'use strict';

  const Snake = window.Snake;
  const Mouse = window.Mouse;
  const KeyMaster = window.KeyMaster;

  class SnakeGame {

    /**
     * Конструктор класса Form
     */
    constructor({ctx, width, height}) {
      this.context = ctx;
      this.cellSize = width / 100;
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.backgroundColor = 'black';
      this.snakeColor = '#00BFFF';
      this.snakeHeadColor = '#00F5FF';
      this.score = 0;
      this.status = 0;
      this.context.fillStyle = this.backgroundColor;
      this.STATUS = {
        PLAY: 0,
        NONE: 1,
        GAMEOVER: 2,
        GAMEWIN: 3,
        PAUSE: 4
      };
      this.Snake = new Snake({game: this, x: width, y: height});
      this.Mouse = new Mouse(this);
      this.key = new KeyMaster();
    }

    /**
     * Начало новой игры
     */
    start() {
      this._stopped = false;
      this.key.init();
      this.startLoop();
    }

    isStopped() {
      return this._stopped;
    }

    /**
     * Начинаем крутить петлю
     */
    startLoop() {
      let time,
        isStopped = this.isStopped.bind(this),
        exec = this.exec.bind(this);

      function step() {
        var now = Date.now(),
          dt = now - (time || now);

        time = now;

        if (!isStopped()) {
          requestAnimationFrame(step);
        }

        while ()
        exec(dt);
      }

      step();
    }

    clear() {
      this.context.fillStyle = this.backgroundColor;
      this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    /**
     * Обрабатываем текущий момент
     * @param  {number} dt
     */
    exec(dt) {
      let keys = this.keys;
      this.clear();

      this.Snake.update();
      this.checkControl();

      this.Snake.render();
      this.Mouse.render();

    }

    collectGarbage() {
      this.bullets.forEach((bullet, index, arr) => {
        if (bullet.toDestroy) {
          arr.splice(index, 1);
        }
      });
    }

    checkControl() {
      if (this.key.is('w')) {
        this.Snake.setRoute('UP');
      }

      if (this.key.is('s')) {
        this.Snake.setRoute('DOWN');
      }

      if (this.key.is('d')) {
        this.Snake.setRoute('RIGHT');
      }

      if (this.key.is('a')) {
        this.Snake.setRoute('LEFT');
      }

    }

    getStatus() {
      return this.status;
    }


    setStatus(value) {
      this.onStatusChange(value, this.status);
      this.status = value;
    }

    onStatusChange(newstatus, oldstatus) {
      if (newstatus == this.STATUS.PLAY && oldstatus != this.STATUS.PAUSE) {
        this.apple.create();
      }
    }

  }

  //export
  window.SnakeGame = SnakeGame;
})();