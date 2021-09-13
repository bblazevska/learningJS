'use strict';

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

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//When we call the constructor function with the new keyword:
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1998);
console.log(matilda, jack);

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