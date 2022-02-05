/*
____________________________________
Problem
take two array arguments and return a combined array with no duplicate values
Input: 2 arrays
Output: 1 joined array

Explicit Rules:
There should be no duplication of values in the returned array,
even if there are duplicates in the original arrays.
You may assume that both arguments will always be arrays.

Implicit Rules:
Questions:
will they always be the same size arrays
____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo
given two arrays
iterate through the elemets of one array and see if any elements
are in the other array
concatenate the two arrays
return the result
____________________________________
Code
*/
function union(arr1, arr2) {
  let noDuplicateArr = arr2.filter(element => {
    return !arr1.includes(element);
  });
  return arr1.concat(noDuplicateArr);
}
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]