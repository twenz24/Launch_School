/*
1) Problem

Input: a string
Output: a number that represents the value of the sum of each letters UTF-16
values.

Explicit:
- input needs to be a string


Implicit:
- empty string is 0


2) Examples

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0


// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

3) Data Structures
4) Algorithm
  1) take a string as the argument
  2) seperate the string out into single characters stored into an array.
  3)iterate through the array finding the characters UTF-16 values and add to
  sum variable
  4) return sum variable


5) Code
*/
`
function utf16Value(str) {
  let sum = 0;
  str.split('').forEach(char => {
    sum += char.charCodeAt();
  });
  return sum;
}
console.log(utf16Value('Four score'));
console.log(utf16Value('Launch School'));
console.log(utf16Value('a'));
console.log(utf16Value(''));

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));
`