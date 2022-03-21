/*

input: array of strings with only lowercase
output: array of strings that have characters in all other strings

algo:
given an array of strings
create a nested array with each of the strings transformed into nested arrs
create a return array initialized to empty array
iterate through the characters of the first string
  iterate thorugh the remaining string
    if the element === the element from the remaining string
    add the element to the returnArr
    replaced the remaining elements current index to ""
return the nested array


*/

function commonChars(strings) {
  let nestedStrArr = strings.map(string => string.split(''));
  let currentMatches = nestedStrArr[0];
  for (let inner = 1; inner < nestedStrArr.length; inner += 1) {
    currentMatches = compareArr(currentMatches,
      nestedStrArr[inner]);
  }
  return currentMatches;
}

function compareArr(arr1, arr2) {
  let newArr = [];
  for (let outer = 0; outer < arr1.length; outer += 1) {
    for (let inner = 0; inner < arr2.length; inner += 1) {
      if (arr1[outer] === arr2[inner] && !newArr.includes(arr1[outer])) {
        newArr.push(arr1[outer]);
        arr2.splice(inner, 1, "");
      }
    }
  }
  return newArr;
}

let a = ['bella', 'label', 'roller', 'hello'];

console.log(commonChars(a));