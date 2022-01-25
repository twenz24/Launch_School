/*
1) Problem
Input:a string

Output: the second to last word of that string

explicit:
 - a word is defined as collection of letters between blank characters
 - can assume that every string has at least 2 words

 Implicit:
 - have fun

2) Examples

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

3) Data Structures
4) Algorithm

1) Seperate sentence into words
2) select the 2nd to last word
3) return that word

5) Code
*/

function penultimate(string) {
  let arrOfString = string.split(' ');
  return arrOfString[arrOfString.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true