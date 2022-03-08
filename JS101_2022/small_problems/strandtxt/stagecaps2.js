/*
____________________________________
Problem

ignore the non alphabetic letters when deciding what gets capitilized

Input: string
Output: alternating capitlized string

Rules:
ignore capitalized letters

Questions:


____________________________________
Examples/test Cases
n % 2 === 0 is a capitalized index

"h|e|l|l|o| |j|o|n| |3|4| |i|s| |m|y| |n|u|m|b|e|r|"
 0 1 2 3 4   5 6 7   8 9   0 1   2 3   4 5 6 7 8 9

____________________________________
Data Structures, Algo
given a string
create a variable "lowercaseArr" with all
  letters in the string passed lowercase within an array
create a capindex variable initialized to 0;
iterate thorugh the lowercaseArr with index 0 incrementing 1 for each iteration
  stopping when the index is >= the legnth of the array
    if the index is a non letter
      continue to the next iteration
    if the cap index is an even number
    capitalize the element at index
  add one to the capIndex
return the string joined from the lowercaseArr
____________________________________
Code
*/

function staggeredCase(string) {
  let lowercaseArr = string.toLowerCase().split('');
  let capIndex = 0;
  for (let index = 0; index < lowercaseArr.length; index += 1) {
    if (!(lowercaseArr[index] >= `a` && lowercaseArr[index] <= `z`)) {
      continue;
    } else if (capIndex % 2 === 0) {
      lowercaseArr[index] = lowercaseArr[index].toUpperCase();
    }
    capIndex += 1;
  }
  return lowercaseArr.join('');
}
console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));