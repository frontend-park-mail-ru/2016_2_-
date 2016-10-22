(function () {
  'use strict';

  const View = window.View;
  const Form = window.Form;

  function validate(data) {
    if (3 > data.user.length || data.user.length > 12) {
      return {name: 'user', result: false};
    }
    if (data.password.length < 6) {
      return {name: 'password', result: false};
    }
    return {result: true};
  }

  class ScoreBoardView extends View {
    constructor(options = {}) {
      super(options);
      this._el = document.querySelector('.js-scoreBoard');
      this.hide();
      this.render(options);
      // TODO: дописать реализацию

    }

    render(options) {
      this._el.innerHTML = '<h1>SCORE BOARD PAGE!</h1>';
    }



    /*init(options = {}) {
     // TODO: дописать реализацию
     }*/
  }


  // export
  window.ScoreBoardView = ScoreBoardView;

})();
