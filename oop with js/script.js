'use strict';
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// ----------------- LECTURES ---------------------------//
/*
//Constructor function
const Person = function (firstName, birthYear) {
   //Instance properties
   this.firstName = firstName;
   this.birthYear = birthYear;

   //Never do this
   
   //this.calcAge = function () {
   //   console.log(2037 - this.birthYear);
   //}
   
}

//STATIC method to a constructor function 
Person.hey = function() {
      console.log('Hey there 👋👋');
}
   
// Person.hey();
*/

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
/*
//class expression
// const PersonCl = class {}

//class declaraton
class PersonCl {
   constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
   }

   //Instance methods

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

   // STATIC METHOD
   static hey() {
      console.log(this);
      console.log('Hey there 👋👋');
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

PersonCl.hey();
*/

/*
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
*/

// OBJECT.CREATE
/*
const PersonProto = {
   calcAge() {
      console.log(2037 - this.birthYear);
   },

   init(firstname, birthYear) {
      this.firstname = firstname;
      this.birthYear = birthYear;
   },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2020;
steven.calcAge();

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2006);
sarah.calcAge();
console.log(sarah);
*/

/////////////////////////////////////////////////////////////
// Inheritance between classes: Constructor functions
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
   Person.call(this,firstName, birthYear);
   this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
   console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)
*/

/////////////////////////////////////////////////////////////
// Inheritance between classes: ES6 Classes
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
   }
   
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there 👋👋');
  }
}

class StudentCl extends PersonCl {
   constructor(fullName, birthYear, course) {
      //Allways needs to happen first
      super(fullName, birthYear);
      this.course = course;
   }

   introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
   }

   calcAge() {
      console.log(`I'm ${2037 - this.birthYear} years old bur as a student i feel like ${2037 - this.birthYear + 10}.`);
   }
}

// const martha = new StudentCl('Martha Jones', 2012);
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);

martha.introduce();
martha.calcAge();
*/

/////////////////////////////////////////////////////////////
// Inheritance between classes: Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstname, birthYear) {
    this.firstname = firstname;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstname, birthYear, course) {
   PersonProto.init.call(this, firstname, birthYear);
   this.course = course;
}

StudentProto.introduce = function () {
   console.log(`My name is ${this.firstname} and I study ${this.course}.`);
}

const jay = Object.create(StudentProto);

jay.init('Jay', 2005, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();



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


// CHALLENGE #2
/*
class CarCl {
   constructor(make, speed){
      this.make = make;
      this.speed = speed;
   }

   accelerate() {
      this.speed += 10;
      console.log(`'${this.make}' going at ${this.speed} km/h `);
   }

   brake() {
      this.speed -= 5;
      console.log(`'${this.make}' going at ${this.speed} km/h `);
   }

   get speedUS() {
      return this.speed / 1.6
   }

   set speedUS(speed) {
      this.speed = speed * 1.6;
   }
};

const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);
*/


// CHALLENGE #3
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`'${this.make}' going at ${this.speed} km/h `);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`'${this.make}' going at ${this.speed} km/h `);
};

const EV = function (make, speed, charge) {
   Car.call(this, make, speed);
   this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  return this.charge = chargeTo;
   // console.log(`Battery charged to ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

EV.prototype.accelerate = function () {
   this.speed += 20;
   this.charge--;
  console.log(`'${this.make}' going at ${this.speed} km/h, with a charge od ${this.charge}%`);
}
console.log(tesla);
tesla.accelerate();
tesla.brake();

console.log(tesla.chargeBattery(90));
tesla.accelerate();
*/