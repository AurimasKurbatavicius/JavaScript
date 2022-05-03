const dog = {
	name: 'dog',
	age: 5,
	color: 'black',
	// Methods
	run() {
		console.log('run');
	},
};
const bird = {
	name: 'bird',
	age: 2,
	color: 'white',
	// Methods
	run() {
		console.log('run');
	},
};
const cat = {
	name: 'cat',
	age: 7,
	color: 'black',
	// Methods
	run() {
		console.log('run');
	},
};

//  ES6 - class
// Klases pavadinimas - is didziosios raides - PascalCase :
// class Animals {}
// class Animal {
// 	constructor(name, age, color) {
// 		// console.log(this);
// 		// this.name = 'CodeAcademy';
// 		this.name = name;
// 		this.color = color;
// 		this.age = age;
// 	}
// }
// const dog2 = new Animal('dog');
// const cat2 = new Animal('cat');
// console.log(dog2);
// console.log(cat2);

class Animal {
	constructor(name, age, color) {
		this.name = name;
		this.color = color;
		this.age = age;
		this.run();
	}
	run() {
		console.log('run');
	}
}
const dog2 = new Animal('dog', null, 'black');
const cat2 = new Animal('cat', 10, 'white');

console.log(dog2.name);
console.log(cat2.name);
cat2.run();

// =====================================
// ES5
// =============================================
// constructor 1
// function Car(make, year, color) {
// 	this.make = "audi";
// 	this.year = 2019;
// 	this.color = "black";
// }

// const audi = new Car();
// const bmw = new Car();
// console.log("audi", audi)
// console.log("bmw", bmw)
// construktor 2
function Car(make, year, color) {
	this.make = make;
	this.year = year;
	this.color = color;
	// this.run = function () {
	// 	console.log('masina vaziuoja');
	// };
	// this.run();
}
Car.prototype.run = function () {
	console.log('masina vaziuoja');
};
Car.prototype.stop = function () {
	console.log('masina stabdo');
};

const audi = new Car('Audi', 2019, 'black');
const bmw = new Car('BMW', 2012, 'white');
console.log('audi', audi);
console.log('bmw', bmw);
