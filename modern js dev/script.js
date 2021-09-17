/*
// Importing Module
// import { addToCart, totalPrice as price, qt } from "./shoppingCart.js";
// addToCart('bread', 5);
// console.log(price, qt);

console.log('Importing module');
// console.log(shippingCost);

// Importing everything from the module
// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// console.log(price);

//Importing default export
import add, {cart} from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);
*/

// Module pattern
const ShoppingCart2 = (function () {
   const cart = [];
   const shippingCost = 10;
   const totalPrice = 137;
   const totalQuantity = 23;

   const addToCart = function (product, quantity) {
     cart.push({ product, quantity });
     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
   };

   const orderStock = function (product, quantity) {
     console.log(`${quantity} ${product} ordered from supplier`);
   };

   return {
      addToCart,
      cart,
      totalPrice,
      totalQuantity,
   }
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
