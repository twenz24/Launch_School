/*
____________________________________
Problem

sort the array of numbers based the english translation alphabetical order

Input: array
Output: same array sorted by alphabetical order

Rules:


Questions:
do you want to return a new array or mutate the original?

____________________________________
Examples/test Cases
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

____________________________________
Data Structures, Algo
given an arrar of numbers
create an object containing the english converstion of 1-19
sort the current array evaluting the english conversion and
ranking based off UTF value
return the new array

____________________________________
Code
*/

function alphabeticNumberSort(arr) {
  let englishWords = {
    0 : "zero", 1 : "one", 2 : "two", 3 : "three", 4 : "four",
    5 : "five", 6 : "six", 7 : "seven", 8 : "eight", 9 : "nine",
    10 : "ten", 11 : "eleven", 12 : "twelve", 13 : "thriteen", 14 : "fourteen",
    15 : "fifteen", 16 : "sixteen", 17 : "seventeen", 18 : "eighteen", 19 : "nineteen"
  };
  return arr.sort((a, b) => {
    if (englishWords[a] > englishWords[b]) {
      return 1;
    } else if (englishWords[b] > englishWords[a]) {
      return -1;
    } else {
      return 0;
    }
  });
}
console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));