/*
1) Problem

Input: a number
Output: a numbr that represents the sum of all numbers between 1 and that number
that are also multiples of 3 and 5.

Explicit: numbers passed as arguments have to be greater than 1
- multiples are inclusive of the argument passed

Implicit:
- numbers passed have to be whole numbers
- all inputs into sum have to be multiples of 3 or 5
- if there are numbers that equal the same multiple. that number should
only be summed once

2) Examples
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

3) Data Structures
4) Algorithm
  1) number is passed as an argument
  2) number is then evaluated to see how many times 3 fits into the number
  3) number is evaluated to see how many times 5 fits into it
  4) for the number of times that 3 fits into the argument, multiply 3 by that
  index multiply 3 by that index and add to array
  5) for the number of times that 5 fits into the argument, multiply 5 by
  that index and add to array
  6) return that sum number


5) Code
*/

function multisum (number) {
  let sumArr = [];
  for (let index = 3; index <= number; index += 3) {
    if (!sumArr.includes(index)) {
      sumArr.push(index);
    }
  }
  for (let index = 5; index <= number; index += 5) {
    if (!sumArr.includes(index)) {
      sumArr.push(index);
    }
  }
  return sumArr.reduce((a, b) => a + b);
}
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
