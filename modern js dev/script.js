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