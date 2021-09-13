'use strict';
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// ----------------- LECTURES ---------------------------//

//Constructor function
const Person = function (firstName, birthYear) {
   //Instance properties
   this.firstName = firstName;
   this.birthYear = birthYear;

   //Never do this
   /*
   this.calcAge = function () {
      console.log(2037 - this.birthYear);
   }
   */
}
/*
const jonas = new Person('Jonas', 1991);
// console.log(jonas);

//When we call the constructor function with the new keyword:
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1998);
// console.log(matilda, jack);

console.log(jonas instanceof Person);


// PROTOTYPES

Person.prototype.calcAge = function () {
   console.log(2031 - this.birthYear);
}

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
//Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);


const arr = [6, 5, 3, 9, 5, 7, 8, 9, 2, 3];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function () {
   return [...new Set(this)];
}
console.log(arr);
console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir( x=> x+1);
*/

////////////////////////////////////////////////////
// ES6 CLASSES

//class expression
// const PersonCl = class {}

//class declaraton
class PersonCl {
   constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
   }

   // Methods will be added to .prototype property
   calcAge() {
      console.log(2037 - this.birthYear);
   }

   greet() {
      console.log(`Hey ${this.fullName}!`);
   }

   //getter
   get age() {
      return 2037 - this.birthYear;
   }
   //setter
   //Set a property that already exist
   set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
   }

   get fullName() {
      return this._fullName;
   }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

console.log(jessica.age);

// PersonCl.prototype.greet = function () {
//    console.log(`Hey ${this.firstName}!`);
// }
jessica.greet()

const walter = new PersonCl('Walter White', 1998);

// GETTERS AND SETTERS

// Getter and setter on object
const account = {
   owner: 'Jonas',
   movements: [200, 530, 120, 300],

   get latest() {
      return this.movements.slice(-1).pop();
   },

   set latest(mov) {
      this.movements.push(mov);
   },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);





///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// ----------------- CHALLENGES ---------------------------//

/*
// CHALLENGE #1

const Car = function (make, speed) {
   this.make = make;
   this.speed = speed;
};

Car.prototype.accelerate = function () {
   this.speed += 10;
   console.log(`'${this.make}' going at ${this.speed} km/h `);
}

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h `);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);
console.log(car1, car2);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car2.brake();
car2.accelerate();
car2.accelerate();
car2.accelerate();
*/