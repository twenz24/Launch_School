/*
1) Problem
Input: two strings
Output: one string that concatenates that shorter string with the longer string
then adds the shorter string to the end

Explicit:
- inputs are both strings
- can assume that strings are always different lengths
- only two inputs

Implicit:
- empty strings are evaluated


Questions:
- is any string a valid string?

2) Examples
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');
3) Data Structures
4) Algorithm
a) define a function that takes two strings as arguments
b) take each string and determine which string is shorter
c) take the shorter string and add it to ther longer string then add that
to the shorter string again
d) return the result

5) Code
*/

function shortLongShort(str1, str2) {
  if (str1.length > str2.length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));