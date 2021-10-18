/*
1) Problem

INput: two numbers
Output: the product of those two numbers

Explicit:
- function will take two arguments
- should return the product

Implicit:
- return value should be a number

question:
- are we to assume that the arguments passed are already numbers?


2) Examples

console.log(multiply(5, 3) === 15); // logs true

3) Data Structures
4) Algorithm

  1) take the two numbers as arguments
  2) multiply them together
  3) return the product


5) Code
*/

function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}

console.log(multiply(5, 3) === 15); // logs true