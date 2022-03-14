/*
____________________________________
Problem

find all of the sustrings in a string

Input: string
Output: array with all substrings

Rules:
return all substrings

Questions:

____________________________________
Examples/test Cases

substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

____________________________________
Data Structures, Algo
given a string
iterate through each letter
call the leadind substring array to find all substrings at
  the current letter
return the new array

____________________________________
Code
*/

/* function substrings(string) {
  let newArr = [];
  string.split('').forEach(element => {
    let indexOfSub = string.indexOf((element));
    newArr = newArr.concat(leadingSubstrings(string.slice(indexOfSub)));
  });
  return newArr;
} */

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(str) {
  let currentSub = "";
  return str.split('').map(char => {
    currentSub += char;
    return currentSub;
  });
}

console.log(substrings('abcde'));