/*
Understanding the problem:
Input: string
Output: an object that stores unique letters as keys and counts the number of
times those letters are used in the string as values

Explicit:
Implicit

Questions:
Does capitilization matter?

Data Structure: function thaat ourputs a an object

Algorithm:

1.) Take an input of a string

2.) Count how many unique letters there are in the string
    a.)Break up the string into individual elements
    b.) iterate through those elements counting how many times that letter
    occurs
    c.)store and add that value to the object

3.) Store those counts as values to the corresponding letters as keys and
return the object

*/

function getLetterCount(str) {
  let charArr = str.split('');
  let objCount = {};
  for (let charIndex = 0; charIndex < charArr.length; charIndex++) {
    let checkChar = str[charIndex];
    let charCount = 0;
    if (checkChar === " ") {
      continue;
    }
    for (let countIndex = 0; countIndex < charArr.length; countIndex++) {
      if (str[countIndex] === checkChar) {
        charCount += 1;
      }
    }
    objCount[checkChar] = charCount;
  }
  return objCount;
}

let statement = "The Flintstones Rock";

console.log(getLetterCount(statement));