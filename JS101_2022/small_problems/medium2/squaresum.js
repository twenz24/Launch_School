/*
____________________________________
Problem

Input: a number
Output: the difference between square of the sum and the sum of squares

Rules:

sum of sqaures is squaring all digits up until and including the given number
square of sum is sum those same digits then squaring

Questions:

can we assume input always numbuer

____________________________________
Examples/test Cases

console.log(sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10);     // 2640
console.log(sumSquareDifference(1);      // 0
console.log(sumSquareDifference(100);    // 25164150
____________________________________
Data Structures, Algo

give a number
declare a variable numArr that will house all numbers used in the calculations
use a loop to add all of the numbers needed 0 to numbers
declare squareOfSums variable that takes all of the numbers in the numArr array
  added up and squared
declare a sumOfSqaures variable that is initialized to
   the result of each element squared and added up
return squareOfSums - sumOfsquares


____________________________________
Code
*/

function sumSquareDifference(number) {
  let numArr = [];
  for (let index = 1; index <= number; index += 1) {
    numArr.push(index);
  }
  let squareOfSums = numArr.reduce((counter, currentValue) => {
    return counter + currentValue;
  }, 0) ** 2;
  let sumOfSquares = numArr.map(number => {
    return number ** 2;
  }).reduce((counter, currentValue) => {
    return counter + currentValue;
  }, 0);
  return squareOfSums - sumOfSquares;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150