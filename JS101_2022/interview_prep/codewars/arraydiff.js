/*

Input: two arrays

Output: only the remaining elements after check for element in the second array in the first

Rules:
- delete any element in the first array that shows up in the second array;


DS:
Array

algo:
given array a and array b
set returnNumbers to []
iterate though array a
  if the number is not included in array b
    add to returnNumbers
return returnNUmbers
*/

function arrayDiff(arrayA, arrayB) {
  return arrayA.filter(element => !arrayB.includes(element));

}

console.log(arrayDiff([1,2,2,2,3],[2, 3])); // == [1,3]