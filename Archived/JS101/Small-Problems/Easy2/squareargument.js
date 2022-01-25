/*
1) Problem

Input: takes a number as an argument

Output: squares that number

2) Examples

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

3) Data Structures
4) Algorithm

5)
*/
function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true