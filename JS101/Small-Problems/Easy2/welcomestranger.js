/*
1) Problem

Input: an array, and an object
Output: a string greeting the person using the specs from the input

Explicit:
 - two arguments: array with name, object with title and occupation
 - should return a greeting that is a string.
 - the two keys for the object will be title and occupation


Implicit: arr will be at least length of 2

Question:

Will the names be in correct order within the array? ( first, middle, last)?
Will the title always come before the occupation


2) Examples

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

3) Data Structures
4) Algorithm
  1) take array and index into string
  2) take obj and index into string
  3) return string
5) Code
*/

function greetings(arr, obj) {
  let name = '';
  for (let index = 0; index < arr.length; index++) {
    name = name + ' ' + arr[index];
  }
  return `Hello,${name}! Nice to have a ${obj['title']} ${obj['occupation']} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.