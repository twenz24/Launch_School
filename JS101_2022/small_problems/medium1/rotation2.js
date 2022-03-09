/*
____________________________________
Problem

Starting from the right side, take the number of digits in designated by
the second number argument and move it to the end pushing everything after
the number up one index

Input: number and designated index to move
Output: number based with the number specified oved to the end

Rules:

second argument passed determines the index that should be moved to the end

Questions:
do we need to worry about an index specified that is not within the length
of the number?

____________________________________
Examples/test Cases

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

735291 ==> 735219
7352 + 1 + 9
____________________________________
Data Structures, Algo

given a number and a number that represents the index of the
  number intended to be moved
declare the `strNumber` variable that turns the first arg into a string
declare a firstHalf variable initialized to all indexes of the string
  up to the specified index
declare an indexValue variable initalize it to the letter at the specified index
declare a secondHald variable initialized it to the variables after the index

return the firstHalf + secondHalf + Index
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

console.log(rotateRightmostDigits(735291, 1));
console.log(rotateRightmostDigits(735291, 2));
console.log(rotateRightmostDigits(735291, 3));
console.log(rotateRightmostDigits(735291, 4));
console.log(rotateRightmostDigits(735291, 5));
console.log(rotateRightmostDigits(735291, 7));

