(function () {
  'use strict';

  /**
   * Модуль для опреления нажатых клавиш
   */
  class KeyMaster {

    constructor() {
      this.keys = {};

      this._onPress = this._keyHandler.bind(this, 'press');
      this._onUp = this._keyHandler.bind(this, 'up');
    }
    init() {
      document.addEventListener('keydown', this._onPress);
      document.addEventListener('keyup', this._onUp);
    }

    destroy() {
      document.removeEventListener('keydown', this._onPress);
      document.removeEventListener('keyup', this._onUp);
    }

    is(key) {
      return this.keys[key];
    }

    _keyHandler(type, event) {
      this.keys[event.key] = type === 'press';
    }


  }

  //export
  window.KeyMaster = KeyMaster;
})();