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
