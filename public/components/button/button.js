(function () {
	'use strict';
<<<<<<< HEAD
=======

>>>>>>> upstream/master
	class Button {
		constructor (options) {
			this.el = document.createElement('button');
			this.el.innerHTML = options.text;
<<<<<<< HEAD
			this.el.style.backgroundColor = options.backgroundColor;
			this.setAttrs(options.attrs);
		}

		setAttrs(attrs) {
			Object.keys(attr).forEach(name => {
				
			})
		}
	}
})();
=======
			this.el.style.backgroundColor = options.backgroundColor || '';
			this.el.classList.add('button');

			this.setAttrs(options.attrs);
		}

		setAttrs (attrs) {
			Object.keys(attrs).forEach(name => {
				this.el.setAttribute(name, attrs[name]);
			})
		}

		static include (btn, el) {
			el.appendChild(btn.el);
		}
	}

	//export
	window.Button = Button;

})();
>>>>>>> upstream/master
