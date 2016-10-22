(function () {
  'use strict';

  const Block = window.Block;

  class GameView extends View {
  constructor(options = {}) {
    super(options);
    this._el = document.querySelector('.mainElem');
    console.log(this._el);
    this.hide();
    this.render(options);
    // TODO: дописать реализацию

  }

  render(options) {
    //let mainBlock = Block('div');
    this._el.innerHTML = '<h1>MEGA MAIN PAGE!</h1>';
  }

  /*init(options = {}) {
   // TODO: дописать реализацию
   }*/
}

  window.GameView = GameView;

}());