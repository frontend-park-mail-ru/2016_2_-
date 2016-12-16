(function () {
  'use strict';
  const View = window.View;
  const Form = window.Form;

  class GameView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.js-game');
      this.hide();
    }

    _init() {
      var socket = new WebSocket("ws://localhost:8080/game");
      socket.onopen = function() {
        alert("Соединение установлено.");
      };

      socket.onclose = function(event) {
        if (event.wasClean) {
          alert('Соединение закрыто чисто');
        } else {
          alert('Обрыв соединения'); // например, "убит" процесс сервера
        }
        alert('Код: ' + event.code + ' причина: ' + event.reason);
      };

      socket.onmessage = function(event) {
        alert("Получены данные " + event.data);
      };

      socket.onerror = function(error) {
        alert("Ошибка " + error.message);
      };
  }

    _initCanvas () {
      this.canvas = this._el.querySelector('.js-canvas');
      this.canvas.width = this._el.clientWidth + '';
      this.canvas.height = this._el.clientHeight + '';
    }

    resume () {
      super.resume();
      this._initCanvas();
      this._init();
    }
  }

  // export
  window.GameView = GameView;

})();