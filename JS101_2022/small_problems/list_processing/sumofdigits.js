/*
____________________________________
Problem

take a number and return the sum of the digits

Input: number
Output: number

Rules:
return value should be a number

Questions:

____________________________________
Examples/test Cases
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
____________________________________
Data Structures, Algo

given a number
take the number and seperate it into its digits using an array
iterate through the array adding each number up
return that number

____________________________________
Code
*/

function sumOfDigits(number) {
  let numArr = String(number).split('');
  return numArr.reduce((a, b) => Number(a) + Number(b));
}

console.log(sumOfDigits(23));
console.log(sumOfDigits(496));
console.log(sumOfDigits(123456789));