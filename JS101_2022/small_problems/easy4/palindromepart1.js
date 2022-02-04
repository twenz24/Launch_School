/*
____________________________________
Problem

Write a function that returns true if the string passed as an argument is
a palindrome, or false otherwise.
A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.

Input: string
Output: boolean. whether it is or isnt a paindrome

Explicit Rules:
- A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.


Implicit Rules:
Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
____________________________________
Code
*/

function isPalindrome(string) {
  let reverseStr = string.split('').reverse().join('');
  return (string === reverseStr);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true