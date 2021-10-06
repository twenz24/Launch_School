/*
1) Problem
Input:
2 numbers

Output:
logging all even numbers including the arguments in asceding order each on their
own line

Implicit:
- Numbers are whole non negative numbers
- the two arguments are provided in asceding order
- we include the arguments in our result, if they meet the even requirement

Question:
- do we need to account for negatives?
- are we to assume that the arguments are provided in ascending order?


2) Examples
oddNumbers(1, 99) =>
2
4
6
...
98

3) Data Structures
4) Algorithm
1) Given a set of numbers, set currentNumber = lowest provided argument
2) while currentNumber is less than or equal to the larger argument
  if current value is even
  log the current value  to the console
  then increment currentNumber by 1
5) Code
*/

function oddNumbers(numberOne, numberTwo) {
  let currentValue = numberOne;
  while (currentValue <= numberTwo) {
    if (currentValue % 2 === 0) {
      console.log(`${currentValue}`);
    }
    currentValue += 1;
  }
}

oddNumbers(1, 99);