/*
____________________________________
Problem

given a nested 3by3 array
transpose it without affecting the original array

Input: nested 3 by 3 array
Output: transposed 3by 3 array


Rules:

transpose is a rearragining the left most elements of the nested array and
  putting them together as a new first array
  same with second elements for the second array
  same with third


Questions:

____________________________________
Examples/test Cases

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

____________________________________
Data Structures, Algo
given a matrix array
make a copyArr of the given Arr by iterating through the array
  and adding a copy of the nested arrays
create a answerArr initialized to an empty arr
iterate through the copyArr's first element
  create a new arr that holds the current index of all arrays in the copyArr
  add that newArr to the answerArr

return answerArr


____________________________________
Code
*/

function transpose(array) {
  let copyArr = array.map(element => {
    return element.slice();
  });
  let answerArr = [];
  for (let outer = 0; outer < copyArr[outer].length; outer += 1) {
    for (let inner = 0; inner < copyArr.length; inner += 1) {
      let newArr = [copyArr[inner][outer], copyArr[inner][outer],
        copyArr[inner][outer]];
      answerArr.push(newArr);
    }
  }
  return answerArr;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]