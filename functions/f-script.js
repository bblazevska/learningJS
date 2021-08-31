'use strict';

/*

// DEFAULT PARAMETARS

const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  
   //ES5
   //numPassengers = numPassengers || 1;
   //price = price || 199;
   
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123',2,900);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123',undefined,1000)
console.log(bookings);
*/

/*
//  PASSING ARGUMENTS TO A FUNCTION

const flight = 'LH234';
const jonas = {
   name: 'Jonas Schmedtmann',
   passport: 2456452657
};

const checkIn = function (flightNum, passenger) {
   flightNum = 'LH999';
   passenger.name = 'Mr.' + passenger.name;

   if (passenger.passport === 2456452657) {
      alert('Check in');
   } else {
      alert('Wrong passport!')
   }
}

// checkIn(flight, jonas);
// console.log(flight, jonas);

const newPassport = function (person) {
   person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight,jonas)
console.log(jonas);
*/

// HIGHER-ORDER FUNCTIONS

/* // Functions accepting Callback functions

const oneWord = function (str) {
   return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
   const [first, ...others] = str.split(' ');
   return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, func) {
   console.log(`Original string: ${str}`);
   console.log(`Transformed string: ${func(str)}`);
   console.log(`Transformed by: ${func.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
   console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas','Martha','Adam'].forEach(high5);

*/

// Functions returning functions
/*
const greet = function (greeting) {
   return function (name) {
      console.log(`${greeting} ${name}`);
   }
}

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);


const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Bojana');

greetArrow('Hi')('Bojana');
greetArrow('Hi')('Jonas');
*/

/*
// FUNCTION METHODS

const lufthansa = {
   airline: 'Lufthansa',
   iataCode: 'LH',
   bookings: [],
   book(flightNum, name) {
      console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
      this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name: `${name}` });
   }
}
lufthansa.book(239, 'Bojana Kuzeva');
lufthansa.book(635,'John Smith')
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

//Does NOT work
// book(23, 'Sarah Johns');


// CALL METHOD
book.call(eurowings, 23, 'Sarah Johns');
console.log(eurowings);

book.call(lufthansa, 239, 'Sarah Johns');
console.log(lufthansa);


const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 563, 'Mary Cooper');
console.log(swiss);


// APPLY METHOD

const flightData = [538, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// BIND METHOD

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(239, 'Mary Cooper');
bookLX(538, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);

bookEW23('Bojana Kuzeva');
bookEW23('Martha Cooper');

//with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
   console.log(this);
   this.planes++;
   console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


//Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
   return function (value) {
      return value + value * rate;
   }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// CHALLENGE #1
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
   //   console.log(this);
     const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
   .addEventListener('click', poll.registerNewAnswer.bind(poll));
  
// Bonus

poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1]});
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

/*
Test data for bonus:  
Data 1: [5, 2, 3] 
Data 2: [1, 5, 3, 9, 6, 1] 
*/