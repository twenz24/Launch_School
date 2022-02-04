/*
____________________________________
Problem

Given a string of words separated by spaces, write a function that swaps
the first and last letters of every word.

Input:string
Output: string with words reversed

Explicit Rules:
-every word contains at least one letter
- string will always contain one word
- each string comprises of words and letters
- there are no leading or trailing spaces

Implicit Rules:
Questions:

____________________________________
Examples/test Cases
console.log(swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde');                          // "ebcdA"
console.log(swap('a');                              // "a"

____________________________________
Data Structures, Algo
given a string
break the string into words
reverse the string
and return the reversed string into an array

____________________________________
Code
*/

function swap(string) {
  let strArr = string.split(' ');
  return strArr.map(word => {
    return word.split('').reverse().join('');
  });
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"