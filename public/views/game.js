(function () {
  'use strict';

  const Block = window.Block;
  const Button = window.Button;

  class GameView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.mainpage');
      console.log(this._el);
      this.class = 'mainpage';
      this.hide();
      this.render(options);
      // TODO: дописать реализацию

    }

    render(options) {
      this._createComponents();
      this._createControls();
      //this._el.innerHTML = '<h1>MEGA MAIN PAGE!</h1>';
    }

    _createControls() {
      let buttons = [
        {
          text: 'Quick Game',
          attrs: {
            type: 'button',
            name: 'quickgame'
          }
        },
        {
          text: 'Scoreboard',
          attrs: {
            type: 'button',
            name: 'scoreboard'
          }
        },
        {
          text: 'exit',
          attrs: {
            type: 'button',
            name: 'exit'
          }
        }
      ];

      buttons.forEach(buttonInfo => {
        buttonInfo.attrs.class = this._component.getClass() + '__' + buttonInfo.attrs.name;
        let button = new Button(buttonInfo);
        this._component._el.appendChild(button._get());
      });
    };

    _createComponents() {
      this._component = new Block('div', {
        name: 'div',
        attrs: {
          class: this.class + '__buttons'
        }
      });
      this._el.appendChild(this._component._get());
    }

    /*init(options = {}) {
     // TODO: дописать реализацию
     }*/
  }

  window.GameView = GameView;

}());