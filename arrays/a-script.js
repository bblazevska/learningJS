'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//  the MAP method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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
