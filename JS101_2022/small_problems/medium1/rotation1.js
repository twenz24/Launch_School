/*
____________________________________
Problem

Input: an array
Output: a copy of the array with the first element moved to the last index of
new array

Rules:
return undefined if the value passed is not an array


Questions:


____________________________________
Examples/test Cases

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


____________________________________
Data Structures, Algo

given a value
if the value is not an array
  return undefined
otherwise
store the first element in a variable element
store the rest of the array in newArr
add firstElement to newArr

return newArr

____________________________________
Code
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let firstElement = array[0];
  let newArr = array.slice(1);
  newArr.push(firstElement);
  return newArr;
}

let arr = [7, 3, 5, 2, 9, 1];
console.log(rotateArray(arr));
console.log(rotateArray(34));
console.log(arr);