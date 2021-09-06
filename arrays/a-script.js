'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// Filling arrays
const arr =[1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

//Empty array + fill method
const x = new Array(7);
console.log(x);

x.fill(1, 3, 5);
x.fill(1);

console.log(x);

arr.fill(23, 4, 6);
console.log(arr);

//Array.from

const y = Array.from({length: 7}, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

/*
// SORTING ARRAYS
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

// return < 0, -> a, b (keep order)
// return > 0, => b, a (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements);
*/

/*

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//
console.log(movements);
console.log(movements.includes(-130));

// SOME METHOD
const anyDeposits = movements.some(mov => mov > 1500);
console.log(anyDeposits);

//EVERY METHOD
console.log(movements.every(mov => mov>0));
// console.log(account4.movements.every(mov => mov > 0));

//seperate callback

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
//the FIND method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
*/

/*
const eurToUsd = 1.1;
// Chaining methods

//Pipeline
const totalDepositsUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUsd);
*/

/*
//the REDUCE method

console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
},0);
console.log(balance);

//Macimum value
const max = movements.reduce((acc, mov) => acc > mov ? acc : mov, movements[0]);
console.log(max);
*/

/*
// the FILTER method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);
*/

/*
//  the MAP method

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// })
const movementsUSD = movements.map( mov => mov*eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsDesc = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDesc);
*/

/* forEach with maps and sets
//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value,key,map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) { 
  console.log(`${value}: ${value}`); // In sets the key and value are the same
});
*/

/*
//  forEach method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const movement of movements){
for (const [i,movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1}: You withdreww ${Math.abs(movement)}`);
  }
}

console.log('-------FOREACH-------');
movements.forEach(function(mov,i,arr){
  if (mov> 0) {
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1}: You withdreww ${Math.abs(mov)}`);
  }
});
*/
/*
// ARRAY METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2.4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));
console.log(letters.join(' '));
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
///////////// CHALLENGES /////////////////////////
/*
// CHALLENGE #1

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia1 = [9, 16, 6, 8, 3];
const dogsKate1 = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJ, dogsK) {
  const correctDogsJ = dogsJ.slice(1, -2);
  const dogs = correctDogsJ.concat(dogsK);

  dogs.forEach((years,i) => {
    years>=3? console.log(`Dog number ${i+1} is an adult, and is ${years} years old.`) : console.log(`Dog number ${i+1} is still a puppy 🐶`);
  });

}

checkDogs(dogsJulia, dogsKate);
console.log('----------------------');
checkDogs(dogsJulia1, dogsKate1);
*/

// CHALLENGE #2

/*
const calcAverageHumanAge = function (dogAges) {
  const dogHumanAges = dogAges.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
  const adults = dogHumanAges.filter(age => age >18);
  console.log(adults);

  // return adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return adults.reduce((acc, age,i,arr) => acc + (age / arr.length), 0);
}*/

// CHALLENGE #3
/*
const calcAverageHumanAge = dogAges =>
  dogAges
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg, avg2);
*/

// CHALLENGE #4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
let recFood;
// 1.
dogs.forEach(dog => {
  recFood = dog.weight * 0.75 * 28;
  dog.recFood = recFood;
});

console.log(dogs);

//2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

// 4.

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much! `);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.

console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.

const dogsEatingOkay = dogs.filter(
  dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);

console.log(dogsEatingOkay);

// 8.

const dogsSorted = dogs
  .slice()
  .sort((a, b) => (a.recFood > b.recFood ? -1 : 11));
console.log(dogsSorted);
