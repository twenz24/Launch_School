/*
____________________________________
Problem
Write a function that returns true if its integer argument is palindromic,
or false otherwise.
A palindromic number reads the same forwards and backwards.
Input: number
Output: boolean
Explicit Rules:A palindromic number reads the same forwards and backwards.

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
____________________________________
Data Structures, Algo
passed a number
  transfrom number to string then split into Arr
  then reverse the arry and join it together
  finally transorm back to number
check if the number reversed is palidromic
return true or false

____________________________________
Code
*/

function isPalindromicNumber(number) {
  let reverseNumber = String(number).split('').reverse().join('');
  console.log((number === Number(reverseNumber)));
}


isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true