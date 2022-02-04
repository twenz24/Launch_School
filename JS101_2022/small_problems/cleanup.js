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
a string is pass into the argument
we need to:
- check if the string contains any non-alphabetical symbols
  - first we need to break the string into individual characters in an array
  - iterate through the array and any non-a symbols will be replaced by " "
    - non-a will be check by the unicode ranges
- replace those non - a symbols
- ensure that there are not consecutive spaces in the array
  - create a new empty array
  - iterate through the newly replaced array
    - push all of the characters into the new array if they are not next to
    another " " character

    return the new array
Code
*/
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?"));