(function () {
	'use strict';
	class Button {
		constructor (options) {
			this.el = document.createElement('button');
			this.el.innerHTML = options.text;
			this.el.style.backgroundColor = options.backgroundColor;
			this.setAttrs(options.attrs);
		}

		setAttrs(attrs) {
			Object.keys(attr).forEach(name => {
				
			})
		}
	}
})();