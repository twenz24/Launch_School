//Problem
/*
Inputs:
one integer (can be positive, negative, or 0)

Outputs:
Boolean
(evaluates true for odd inputs and false for even inputs)

can assume that the number is a valid integer number

Implicits:

- a valid integer is any whole number that does not include any decimals
- 0 is evaluated to false (considered an "even variable")
- positive numbers evaluate the same as there negative counterparts

*/
//Examples
/*
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/
//Data Structure
//Algorithm
/*
1) We have a function that takes a valid integer input
2) if the input is odd, we return true, if even we return false
*/
//Code
function isOdd(number) {
  if (number < 0) {
    return number % 2 === -1;
  } else {
    return number % 2 === 1;
  }
}
console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));

