(function () {
	'use strict';
	let name = 'Mika';
	alert(`My name is ${name}`)

	//Class
	class Animal {
		constructor (options) {
			this.name = options.name;
			console.log('Creating new instance!');
		}

		sayHello () {
			console.log(`Hello! I am ${this.name}`);
		}
	}


	class Dog extends Animal {
		constructor (options) {
			super(options);
		}

		bark() {
			super.sayHello();
			console.log('Bitch-Bitch')
		}

		static catchDog(dog) {
			Dog.__instences.push(dog);
		}

	}

	let animal = new Animal({
		name:'Blitz'
	});
	animal.sayHello();

	let dog = new Dog({
		name:'Bob'
	});
	dog.bark();

})();