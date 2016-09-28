(function () {
	'use strict';
<<<<<<< HEAD
	let name = 'Mika';
	alert(`My name is ${name}`)

	//Class
=======

	// Class

>>>>>>> upstream/master
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
<<<<<<< HEAD
		}

		bark() {
			super.sayHello();
			console.log('Bitch-Bitch')
		}

		static catchDog(dog) {
			Dog.__instences.push(dog);
=======

			this.someField = 'foo';
		}

		bark () {
			super.sayHello();
			console.log('Woff-woff!')
		}

		static catchDog (dog) {
			Dog.__instances.push(dog);
>>>>>>> upstream/master
		}

	}

<<<<<<< HEAD
	let animal = new Animal({
		name:'Blitz'
	});
	animal.sayHello();

	let dog = new Dog({
		name:'Bob'
	});
	dog.bark();

})();
=======
	Dog.__instances = [];

	let bob = new Dog({ // Creating new instance!
		name: 'Bob'
	});

	Dog.catchDog(bob);
	Dog.someField; // undefind

	bob.bark();
	bob.someField; // foo


})();
>>>>>>> upstream/master
