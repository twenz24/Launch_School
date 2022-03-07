/*
_____
Problem

Input: string as an argument
Output: boolean literal whether or not the string contains only Upper Case

Rules:
empty string are considered true
ignoring all characters other than letters in string


Questions:

____________________________________
Examples/test Cases

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

____________________________________
Data Structures, Algo

given a string
create an array that only use contains the letters within the string
return the check to see if every letter is upper case
____________________________________
Code
*/

function isUppercase(string) {
  let stringArr = string.split('').filter(element => {
    let upperElement = element.toUpperCase();
    return (upperElement.charCodeAt() >= 65 && upperElement.charCodeAt() <= 90);
  });
  return stringArr.every(element => {
    console.log(element);
    return (element.charCodeAt() >= 65 &&
      element.charCodeAt() <= 90);
  });
}


isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');
