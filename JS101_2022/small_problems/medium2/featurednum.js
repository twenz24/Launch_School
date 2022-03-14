/*
____________________________________
Problem

Input: number
console.log(Output:next biggest number that is )a featured number

Rules:

console.log(A featured number (something unique to thi)s exercise) is an
odd number that is a multiple of 7, with all of its
digits occurring exactly once each.

Questions:

____________________________________
Examples/test Cases

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills tho)se requirements."

____________________________________
Data Structures, Algo

given a number
declare a featuredNum variable initialized to 1 more than number
console.log(while the number is not )a featured number
  if the number is greater than the max
    log the error message
  add 1 to the featuredNum
return featuredNum

isFeaturedNum
given a number
if the number is divisible by 7

and

does not duplicate a digit

it is

____________________________________
Code
*/

function featured(num) {
  const MAX_NUMBER = 9876543201;
  let featuredNum = num + 1;
  while (!isFeaturedNumber(featuredNum)) {
    if (featuredNum > MAX_NUMBER) {
      featuredNum = "There is no possible number that fulfills those requirements.";
      break;
    }
    featuredNum += 1;
  }
  return featuredNum;
}

function isFeaturedNumber(number) {
  return (number % 2 === 1) && (number % 7 === 0) && allUniqueDigits(number);
}

function allUniqueDigits(number) {
  let digitArr = String(number).split('').sort();
  let result = true;
  for (let index = 0; index < digitArr.length; index += 1) {
    if (digitArr[index] === digitArr[index + 1]) {
      result = false;
    }
  }
  return result;
}


console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills tho)se requirements."
