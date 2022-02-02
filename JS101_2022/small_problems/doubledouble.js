/*
Problem
Write a function that returns the number provided as an
argument multiplied by two, unless the argument is a double number;
otherwise, return the double number as-is.

Input: even lengthed number
Output: number; eithered doubled the input or the same if it is a double number

- Explicit
- a double number is an even lengthed number whose left digits are
exactly the same as its right side digits.
- Implicit:


Questions:
- do we assume all inputs are numbers?
- what should happen if a blank is passed as argument?

Examples/test Cases

console.log(twice(37);          // 74
console.log(twice(44);          // 44
console.log(twice(334433);      // 668866
console.log(twice(444);         // 888
console.log(twice(107);         // 214
console.log(twice(103103);      // 103103
console.log(twice(3333);        // 3333
console.log(twice(7676);

Data Structures, Algo

console.log(twice function:

Declare a function that take a number as input
if that number is not a double number, multiply the number by 2, then return it
else, return the number as is

isDoubleNumber function

declare a function that take number as input
Turn the number into a string
get the index of the middle of the number, by dividing the legnth by 2
using the index of the middle of the number, split the string number into
first and second half

return the strict comparison of the first and second half.

Code
*/
function twice(number) {
  if (!isDoubleNumber(number)) {
    return (number * 2);
  } else {
    return number;
  }
}

function isDoubleNumber(number) {
  let numberStr = String(number);
  let middleIndex = Math.floor(numberStr.length / 2);
  let firstHalf = numberStr.slice(0, middleIndex);
  let secondHalf = numberStr.slice(middleIndex);
  return firstHalf === secondHalf;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676