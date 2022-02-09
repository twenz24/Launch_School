/*
____________________________________
Problem

return the opposite sign for the number given

Input: number
Output: oppsite sign number
Explicit Rules:

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
____________________________________
Data Structures, Algo

given number
if number is neg return number
if positive
* number by -1
____________________________________
Code
*/

function negative(number) {
  return number < 0 ? number : number * -1;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
