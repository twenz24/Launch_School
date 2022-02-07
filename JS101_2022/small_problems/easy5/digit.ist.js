/*
____________________________________
Problem
Write a function that takes one argument, a positive integer,
and returns a list of the digits in the number.
Input: number
Output: array of integers in number
Explicit Rules:

Implicit Rules:
Questions:
- what should an empty string return
what type should the elements in the array be?

____________________________________
Examples/test Cases

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
____________________________________
Data Structures, Algo

given a number
take the number make it a string
split the string into array
return array

____________________________________
Code
*/
function digitList(number) {
  let stringArr = String(number).split("");
  let numArr = stringArr.map(number => {
    return Number(number);
  });
  console.log(numArr);
}


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]