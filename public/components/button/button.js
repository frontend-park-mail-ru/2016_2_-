(function () {
	'use strict';

	const Block = window.Block;

	class Button extends Block {

		constructor (options) {
			super('button', options);
			this.text = options.text;
			this.attrs = options.attrs || [];
		}


		render () {
			this._el.innerHTML = this.text;
			this.setAttrs(this.attrs);
			return this;
		}
	}


	//export
	window.Button = Button;
})();