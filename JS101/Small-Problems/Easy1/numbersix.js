/*
1) Problem
input:
- an integer from the user greater than 0
- Input from user whether the program should multiply or sum the numbers

Output:
A number dependent on the type of operation that sums or multiplies all numbers
from 1 to n

explicit:
- numbers have to be greater than 0
- inputs have to be integers
- p notates multiply
- s notates sum
- inlcude the 1 and n in the final operation

Implicit:
Output shown should not have any decimals.


2) Examples
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.

3) Data Structures
array to store relevant integers

4) Algorithm
1) ask the user to input a non zero positive integer
2) ask whether to compute the sum or the product
3) If sum, add the numbers 1 to n
  a) find all number between 1 and n and store them
  b) sum all numbers together
4) if product, multiply the numbers 1 to n
  a) find all number between 1 and n and store them
  b) multiply them together
5) log the operation result to the console.

5) Code
*/
const readline = require('readline-sync');

console.log(`Please enter an integer greater than 0:`);
let numberLimit = readline.question();

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = readline.question();
let operationName;
let outputValue = 0;
if (operation === 's') {
  operationName = "sum";

  for (let counter = 1; counter <= numberLimit; counter++) {
    outputValue += counter;
  }
}
if (operation === 'p') {
  outputValue = 1;
  operationName = "product";

  for (let counter = 1; counter <= numberLimit; counter++) {
    outputValue *= counter;
  }
}

console.log(`The ${operationName} of the integers between 1 and ${numberLimit} is ${outputValue}.`);