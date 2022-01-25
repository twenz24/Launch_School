/*
1) Problem
Inputs: a whole non zero positive number
Output: boolean noting if the number is a leap year or not

Explicit:
- Leap year is any number evenly divisible by 4
- if evenly divisable by 100 it is not a leap year, unless it is divisible by
  400

Implicit:
- no partial year inputs

questions:
- Is there a limited number of valid year inputs?

2) Examples

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

3) Data Structures
4) Algorithm

a) take the input, make sure it is valid, then evaluate:
b) if input is divisible by 400, it is a leap year
c) if input is divisible by 100 it is not a leap year
d) if it is divisible by 4, it is a leap year
e) anything else, it is not a leap year
f) return the decision


5) Code
*/
function isValidInput(number) {
  return number % 1 === 0;
}

function isLeapYear (year) {
  if (isValidInput(year)) {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return "not a valid input";
  }
}
console.log(isLeapYear(2016.2));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true
