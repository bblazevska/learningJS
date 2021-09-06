'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// NUMBERS, DATA AND TIMERS LECTURES

/*
console.log(23 === 23.0);

//Base 10 - 0 to 9 ,  1/10 = 0.1  3/10 = 3.333333
// Binary base 2 - 0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
console.log('-----------');

//Conversion
console.log(Number('23'));
console.log(+'23');
console.log('-----------');

//Parsing

console.log(Number.parseInt('20px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('2.5rem'));
console.log(Number.parseFloat('2.5rem'));
console.log('-----------');

//Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

console.log('-----------');
// Check if value is a number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

// MATH

console.log('------ MATH -------');
console.log(Math.sqrt(25));

console.log(25 ** (1 / 2)); // another way of calculating roots
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); // does type coarsion but not parsing

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Math.random

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));


// Rounding integers

console.log(Math.trunc(23.3));
console.log(Math.trunc(23.8));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor(23.9));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));
console.log(Math.floor(-23.9));

// Rounding decimals

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
*/

/*
// Remainder operator %

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1 -> 1 is the remainder

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(7 % 2); // even number, the remainder is 0
console.log(6 / 2);

const isEven = n => n % 2 === 0;

console.log(isEven(6));
console.log(isEven(9));
console.log(isEven(23));
console.log(isEven(514));
*/

/*
// BigInt

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(6546456551564878745141564515214546416541n);
console.log(BigInt(654645655156487));

//Operations

console.log(10000n + 10000n);
console.log(4587854154157454521468n * 1000000n);

const huge = 2028645854755414856n;
const num = 23;

console.log(huge * BigInt(num));

//Exceprions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + 'is REALLY big!!');

//Devisions

console.log(12n / 3n);
console.log(10 / 3);
*/

//////////////////////////////////////
///////////// DATES /////////////////

// Creating dates
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

// const now = new Date();
// console.log(now);

// console.log(new Date('Sep 06 2021 15:31:21'));
// console.log(new Date('December 24, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31, 15, 23, 5));

// console.log(new Date(0));
// console.log(new Date(3 * 24 * 60 * 60 * 1000));


//Working with dates

const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());

console.log(new Date(2142253380000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);