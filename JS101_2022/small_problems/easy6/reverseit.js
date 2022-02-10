/*
____________________________________
Problem

Input: string
Output: new string

Rules:

Questions:

____________________________________
Examples/test Cases
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

____________________________________
Data Structures, Algo
take a string
seperate the two words in the string and store in an array
reverse the two strings in the array
return the joined array

____________________________________
Code
*/

function reverseSentence(string) {
  let strArr = string.split(' ');
  strArr.reverse();
  console.log(strArr.join(' '));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"