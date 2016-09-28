(function () {
	'use strict';
<<<<<<< HEAD
=======

>>>>>>> upstream/master
	class Button {
		constructor (options) {
			this.text = options.text;
			this.attrs = options.attrs || [];
			this.el = document.createElement('button');
<<<<<<< HEAD
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
=======
>>>>>>> remotes/valera/master
		}

		setAttrs (attrs) {
			Object.keys(attrs).forEach(name => {
				this.el.setAttribute(name, attrs[name]);
			})
		}

		render () {
			this.el.innerHTML = this.text;
			this.el.classList.add('button');
			this.setAttrs(this.attrs);
			return this;
		}
		
		toString () {
			return this.el.outerHTML;
		}
	}

	//export
	window.Button = Button;

})();
>>>>>>> upstream/master
