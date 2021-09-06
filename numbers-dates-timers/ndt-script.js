'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// NUMBERS, DATA AND TIMERS LECTURES

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