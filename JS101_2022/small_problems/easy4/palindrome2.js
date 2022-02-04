/*
____________________________________
Problem

Input: string
Output:boolean

Explicit Rules:
- should be case insensitive
- ignore all non alphanumeric characters

Implicit Rules:
Questions:
- clarify what is meant by alpha numeric

____________________________________
Examples/test Cases

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
____________________________________
Data Structures, Algo
passed a string
make string lower case
split sting into individual characters
assess if the string is palindrome by:
- git rid of any non - a characters
  iterate through the array and only keep alphabetic chars
- check if the reverse string is === to the newly created string
____________________________________
Code
*/

function isRealPalindrome(str) {
  let strArr = str.toLowerCase().split('');
  let newStr = [];
  strArr.forEach(char => {
    if (isLetter(char) || isNumber(char)) {
      newStr.push(char);
    }
  });
  console.log((newStr.join('') === newStr.reverse().join("")));
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false