/*

#1
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]

Description
On line five we declare and intialize the global variable "numbers" to the
array object [1, 2, 3, 4, 5]. Additionally on line 6, we declare and intialize
the global transformedNumbers to an empty array. on line 8 we use a for 
loop to iterate over the numbers array adding 1 to the index for each iteration
stopping the when the index is = to the number array's length.
During each iteration we are declaring and initalizing the local variable
currentNumber to the element in the number array at index.
We then declare and initalize the local variable squaredNum and set it equal to
currentNum * currentNum

then we mutate transformedNumbers array by adding(pushing) the squareNum as an
element

the result is an array with all elements of the numbers array squared.


*/

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();