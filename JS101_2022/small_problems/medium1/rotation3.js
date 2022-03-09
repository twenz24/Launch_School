/*
____________________________________
Problem

Input: number
Output: a number that is returned after the maximum number rotation

Rules:
rotate the number passed to the max number

Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

____________________________________
Code
*/

function rotateRightmostDigits(number, index) {
  let strNumber = String(number);
  if (Number(strNumber.length) < index) {
    return number;
  }
  let rightIndex = strNumber.length - index;
  let firstHalf = strNumber.slice(0, rightIndex);
  let indexValue = strNumber[rightIndex];
  let secondHalf = strNumber.slice(rightIndex + 1);

  return Number(firstHalf + secondHalf + indexValue);
}

function maxRotation(number) {
  let strNumber = String(number);
  for (let index = strNumber.length; index > 0; index -= 1) {
    strNumber = rotateRightmostDigits(strNumber, index);
  }
  return strNumber;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
