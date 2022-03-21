/*

input is an array of strings
output is the common prefix amoung the strings within the array

given an array of strings
iterate through the array
  make all strings into an array of substrings
  create a returnValue variable
compare each substring within each array
  compare index n of first array with index n of all arrays within nested array
  if true
  assign returnValue index of n of firstArr

return returnValue

leadingSubstring

take a string
create an empty array
iterate through the string
  add a slice from 0 to index + 1 of the array

return emptyArr

*/

function commonPrefix(arr) {
  let nestedArr = arr.map(element => {
    return leadingSubstring(element);
  });
  let returnValue = "";
  nestedArr.sort((a, b) => b.length - a.length);

  nestedArr[0].forEach((sub, index) => {
    if (sub === nestedArr[1][index] && sub === nestedArr[2][index]) {
      returnValue = sub;
    }
  });
  return returnValue;
}

function leadingSubstring(string) {
  let newArr = [];
  string.split('').forEach((_, index) => {
    newArr.push(string.slice(0, index + 1));
  });
  return newArr;
}
console.log(leadingSubstring('flower'));
console.log(commonPrefix(['flower', 'flow', 'flight']));