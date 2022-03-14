/*
____________________________________
Problem

Input: an array of numbers
Output: an array of number sorted by comparing each number

Rules:

bubble sort

iterating through the array until one interation is complete without any
  switching
The array should not be altered

Questions:

it looks like we want a copy of the array sorted,
is it okay if it is a shallow copy?

____________________________________
Examples/test Cases

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);
____________________________________
Data Structures, Algo

given an array
create a copy of the arrray
create an array changesArray to monitor the changes made to the array
while the changesArr length is less than the legnth of the given array
  or every element is not true
set the changes array to an empty array
iterate through the copy of the array
  if index is more than index + 1 swap them
  set changesArray at index = true
  continue
set changes array at index to false

return the copy of the array sorted
____________________________________
Code
*/

function bubbleSort(array) {
  let changesArr = [true];
  while (!changesArr.every(element => element === false)) {
    changesArr = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > array[index + 1]) {
        let newValueOfIndex = array[index + 1];
        let newValueOfNextIndex = array[index];
        array[index + 1] = newValueOfNextIndex;
        array[index] = newValueOfIndex;
        changesArr[index] = true;
        continue;
      }
      changesArr[index] = false;
    }
  }
  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);