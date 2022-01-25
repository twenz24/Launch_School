/*
1) Problem
Input:
2 numbers

Output:
logging all numbers including the arguments in asceding order each on their
own line

Implicit:
- Numbers are whole non negative numbers
- the two arguments are provided in asceding order
- we include the arguments in our result

Question:
- do we need to account for negatives?
- are we to assume that the arguments are provided in ascending order?


2) Examples
oddNumbers(1, 99) =>
1
2
3
...
99
3) Data Structures
4) Algorithm
1) Given a set of numbers, set currentNumber = lowest provided argument
2) while currentNumber is less than or equal to the larger argument
  log the current value to the console one its own line
  then increment currentValue by 1
5) Code
*/

function oddNumbers(numberOne, numberTwo) {
  let currentValue = numberOne;
  while (currentValue <= numberTwo) {
    console.log(`${currentValue}`);
    currentValue += 1;
  }
}

oddNumbers(1, 99);