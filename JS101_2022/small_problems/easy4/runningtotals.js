/*
____________________________________
Problem
Write a function that takes an array of numbers and returns an
array with the same number of elements,
but with each element's value being the running total from the original array.

Input: array
Output: array of running total

Explicit Rules: only numbers in array

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

console.log(runningTotal([2, 5, 13]);             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]);                    // [3]
console.log(runningTotal([]);                     // []
____________________________________
Data Structures, Algo

given an array of numbers
  declare a totals number variable
iterate through the array and add each iteration to the last
  use map function to iterate
    adding each iteration to the totals variable and return it
return the added up array
____________________________________
Code
*/
function runningTotal(arr) {
  let totals = 0;
  return arr.map(number => {
    return (totals += number);
  });
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []