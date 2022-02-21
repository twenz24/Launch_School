/*
____________________________________
Problem

take a string and return an array of all of the substrings

Input: string
Output: array of substrings

Rules:

Questions:

____________________________________
Examples/test Cases
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
____________________________________
Data Structures, Algo
given a string
split the string into individual letters in an array
iterate through the array and add the letters added together
  at that index and the indexs previously to the new array
return the array
____________________________________
Code
*/

function leadingSubstrings(str) {
  let currentSub = "";
  return str.split('').map(char => {
    currentSub += char;
    return currentSub;
  });
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));