/*
____________________________________
Problem

take a string and return the same string but with every other letter capitalized

Input: string
Output: string that has every other LETTER capitalized starting at index 0

Rules:
no non letter chars should be affected
every other letter should be capilized

Questions:

____________________________________
Examples/test Cases
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
____________________________________
Data Structures, Algo

given a string
create a variable "lowercaseArr" with all
  letters in the string passed lowercase within an array
iterate thorugh the lowercaseArr with index 0 incrementing 2 for each iteration
  stopping when the index is >= the legnth of the array
  capitalize the element at index

return the string joined from the lowercaseArr

____________________________________
Code
*/

function staggeredCase(string) {
  let lowercaseArr = string.toLowerCase().split('');
  for (let index = 0; index < lowercaseArr.length; index += 2) {
    lowercaseArr[index] = lowercaseArr[index].toUpperCase();
  }
  return lowercaseArr.join('');
}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));