/*
____________________________________
Problem

multiply the two arrays together

Input: two arrays
Output: one multiplied array

Rules:
should be a new array

Questions:

____________________________________
Examples/test Cases
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

____________________________________
Data Structures, Algo
given two arrays
create a new array
  iterate through the first array
  mutiply each element in the first array by the second
    this will be done by iterating through the second array
  add that number to the new arr
return the newArr sorted numerically

____________________________________
Code
*/

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];
  arr1.forEach(element1 => {
    arr2.forEach(element2 => {
      newArr.push(element1 * element2);
    });
  });
  return newArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));