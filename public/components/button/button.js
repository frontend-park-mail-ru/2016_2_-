(function () {
	'use strict';

	const Block = window.Block;

	class Button extends Block {

		constructor (options, el) {
			super('div', {});
			this._options = options;
			this.text = options.text;
			this.template = window.fest['button.tmpl'];
			this.attrs = options.attrs || [];
			this.render();
		}


		render() {
			this._el.innerHTML = this.template(this._options);
			return this;
		}
	}


	//export
	window.Button = Button;
})();