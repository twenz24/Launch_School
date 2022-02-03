/*
____________________________________
Problem
Given a string that consists of some words and an assortment of
non-alphabetic characters, write a function that returns that
string with all of the non-alphabetic characters replaced by spaces.

Input: string
Output: string without non-alphebetic characters

Explicit Rules: all non - alphabetic symbols should be replaced by " ";
there should not be 2 consecutively replaced non - a symbols


Implicit Rules:

Questions:
what about a blank string?


____________________________________
Examples/test Cases

cleanUp("---what's my +*& line?");    // " what s my line "
____________________________________
Data Structures, Algo
given a string
split string into individuals characters within an array
check and see if those characters are indeed non - a characters
  use charCode function to see if codes are between 065 and 122
if so, replaced them with " "
check and see if any of there are any consecutive spaces
____________________________________
Code
*/

function cleanUp(str) {
  let strArr = str.split('');
  for (let index = 0; index < strArr.length; index++) {
    if ((strArr[index].charCodeAt(0) >= 65 && strArr[index].charCodeAt(0) <= 90)
    ||
    (strArr[index].charCodeAt(0) <= 122 && strArr[index].charCodeAt(0) >= 97)) {
      continue;
    } else if (strArr[index] !== " ") {
      strArr[index] = " ";
    }
  }
  return removeConsecutiveSpaces(strArr).join('');
}

function removeConsecutiveSpaces(arr) {
  let newArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] !== " " && arr[idx - 1] !== " ") {
      newArr.push(arr[idx]);
    }
  }
  return newArr;
}


console.log(cleanUp("---what's my +*& line?"));    // " what s my line "