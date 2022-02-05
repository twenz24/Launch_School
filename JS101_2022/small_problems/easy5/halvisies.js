/*
____________________________________
Problem

Input: take an array
Output: return an array with two sub arrays containing each half of the OG Arr

Explicit Rules:
if odd legnth array the middle goes with the first half

Implicit Rules: if one element array, it should return two subarrays one with 1
element, the other with 0

no element array should return two no element sub arrayss
Questions:

are we able to mutate the original array?

____________________________________
Examples/test Cases
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
____________________________________
Data Structures, Algo
given array
determine the legnth of the array
store legnth / 2 ceil as length of first arr
store length / 2 floor as legnth of second arr
create empty first half array
create empty second half array
iterate through the array and create new array containing length of first half
  while the index is < half length
  add the index value to the first array
iterate through array and create new array containing second half
  let the index be first half length, whilee that is less than second half
  add the index value to the second arr

combined arrays into one array and return that array
____________________________________
Code
*/

function halvsies(arr) {
  let firstArrLength = Math.ceil(arr.length / 2);
  let firstArr = [];
  let secondArr = [];
  for (let index = 0; index < firstArrLength; index++) {
    firstArr[index] = arr[index];
  }
  for (let index = 0; (index + firstArrLength) < arr.length; index++) {
    secondArr[index] = arr[index + firstArrLength];
  }
  let splitArr = [firstArr, secondArr];
  console.log(splitArr);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
