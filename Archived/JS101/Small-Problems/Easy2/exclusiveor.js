/*
1) Problem

Input: two inputs

output: whether the only 1 of the inputs is truthy

Explicit:
- looking for a boolean return value, not truthy/falsy
- only one argument can be truthy

Implicit:
- arguments can be anything
- must evaluateusing strict equality

2) Examples

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


3) Data Structures
4) Algorithm
  1) check if first number is truthy
  2) check if second number is truthy
  3) If only one is truthy, return true
  else, return false
5) Code
*/

function xor(value1, value2) {
  let truthyCounter = 0;
  if  (value1) {
    truthyCounter += 1;
  }
  if (value2) {
    truthyCounter += 1;
  }
  if (truthyCounter === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);