/*
____________________________________
Problem

takes an array of numbers and returns the average of those numbers.

Input: array of numbers
Output: average of the array
Explicit Rules: 3 decimals

Implicit Rules:
Questions:

____________________________________
Examples/test Cases
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
____________________________________
Data Structures, Algo
given an array
find the mulitplied average of the numbers in the array
  use the reduce function to multiply each other
  use length of array to divide
____________________________________
Code
*/

function multiplicativeAverage(arr) {
  let average = arr.reduce((multipliedTotal, currentMultiple) => {
    return multipliedTotal * currentMultiple;
  }) / arr.length;
  return average.toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
