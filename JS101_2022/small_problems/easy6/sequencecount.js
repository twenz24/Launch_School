/*
____________________________________
Problem

Input: two number, a counter and a starting value
Output: array starting of counter legnth adding the starting value each index
Explicit Rules:

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
____________________________________
Data Structures, Algo

given counter and startingvalue

while the index is less than the counter
push
____________________________________
Code
*/

function sequence(counter, startingValue) {
  let newArr = [];
  let indexValue = startingValue;
  for (let index = 0; index < counter; index++) {
    newArr.push(indexValue);
    indexValue += startingValue;
  }
  console.log(newArr);
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []