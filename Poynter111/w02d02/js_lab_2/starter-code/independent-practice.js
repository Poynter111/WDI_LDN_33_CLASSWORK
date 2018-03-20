/* eslint-disable no-unused-vars */

//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// var i;
// const map1 = champs.map(x => x * 2);
// function lengths(args){
//   for(i = 0; i < champs.length; i++){
//     return args[i].length;
//   }
// }
//
// lengths(champs);

var champs = ['Braum', 'karma', 'Ryze'];
var lengths = champs.map(function(word){
  return word.length
});
console.log(lengths);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.


// 3.  Write a function `wordReverse` that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry
// about punctuation.
