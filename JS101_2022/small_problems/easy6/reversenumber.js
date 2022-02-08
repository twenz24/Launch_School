/*
____________________________________
Problem

given a number, reverse it

Input: number
Output: reversed number
Explicit Rules:

leading zeros get dropped

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 --
Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
____________________________________
Data Structures, Algo

given a number
take the number and split it into an array
reverse that array
if the array has leading zeros
iterate through only returning the non zero values
return array joined and explicitly coerced into a number
____________________________________
Code
*/

function reverseNumber(number) {
  let numArr = String(number).split('').reverse();
  if (numArr[0] === '0') {
    numArr = numArr.filter(num => {
      return num !== '0';
    });
  }
  console.log(numArr.join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

