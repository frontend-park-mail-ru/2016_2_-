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
      /*let WebSocketServer = require('websocket').server;
      let WebSocketClient = require('websocket').client;
      let WebSocketFrame  = require('websocket').frame;
      let WebSocketRouter = require('websocket').router;
      var client = new WebSocketClient();
 
      client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
      });
 
      client.on('connect', function(connection) {
        console.log('WebSocket Client Connected');
        connection.on('error', function(error) {
          console.log("Connection Error: " + error.toString());
        });
        connection.on('close', function() {
          console.log('echo-protocol Connection Closed');
        });
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
              console.log("Received: '" + message.utf8Data + "'");
            }
        });
    
        function sendNumber() {
          if (connection.connected) {
              var number = Math.round(Math.random() * 0xFFFFFF);
              connection.sendUTF(number.toString());
              setTimeout(sendNumber, 1000);
          }
        }
        sendNumber();
      });
 
      client.connect('ws://localhost:8080/', 'echo-protocol');*/

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