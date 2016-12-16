(function () {
  'use strict';

  const View = window.View;


  class ScoreBoardView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.scoreboard');
      this.hide();
      this.render(options);
      // TODO: дописать реализацию

    }

    render(options) {
      this._el.innerHTML = '<h1>SCORE BOARD PAGE!</h1>';
    }

  }


  // export
  window.ScoreBoardView = ScoreBoardView;

})();
