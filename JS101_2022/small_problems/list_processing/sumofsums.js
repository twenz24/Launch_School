/*
____________________________________
Problem

Given an array of numbers as input, return the sum of sums of each leading
subsequnce in that array.

Input: array of numbers
Output: sum of the numbers, from each of the leading sub array sums

Rules:
- the array has to contain one number
- adding up the sum of each leading sub array of numbers


Questions:


____________________________________
Examples/test Cases

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
____________________________________
Data Structures, Algo

given an array of number
// SubArray Function
create a new nested array of sub arrays which will
iterate through the passed array
  add the sub array at the current index to the global nested Array

// Sum of Sums func
assign nestedArr variable to return value of subarray function
contain all leading sub arrays
create a sumofSum variable
iterate through the nested nestedArr
  add the sum of the nested array to the sumofsum variable
return sumOfSum Variable
____________________________________
Code
*/
function sumOfSums(array) {
  let subArr = nestedArr(array);
  let sumOfSums = 0;
  subArr.forEach(element => {
    sumOfSums += element.reduce((counter, number) => counter + number);
  });
  return sumOfSums;
}
function nestedArr(array) {
  let nestedArr = [];
  array.forEach((_, index) => {
    nestedArr.push(array.slice(0, index + 1));
  });
  return nestedArr;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));