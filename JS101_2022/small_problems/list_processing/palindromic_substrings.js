/*
____________________________________
Problem

Input: given a string
Output: find all of the palindromic substrings

Rules: anything split by a non letter character is not a palindrome

Questions:

____________________________________
Examples/test Cases
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
____________________________________
Data Structures, Algo

given a string
create a variable that stores all of the substrings into an array
iterate through the array
  if the element within the array is the same reversed
    add that element to the new array
return the new array
____________________________________
Code

!newArr.includes(substringArr[index])
*/

function substrings(string) {
  let newArr = [];
  let maxIndex = Math.floor(string.length / 2);
  let stringArr = string.split(' ');
  for (let index = 0; index < maxIndex; index += 1) {
    let indexOfSub = string.indexOf((stringArr[index]));
    newArr = newArr.concat(leadingSubstrings(string.slice(indexOfSub)));
  }
  return newArr;
}

function leadingSubstrings(str) {
  let currentSub = "";
  return str.split('').map(char => {
    currentSub += char;
    return currentSub;
  });
}

// function palindromes(string) {
//   let substringArr = substrings(string);
//   let newArr = [];
//   for (let index = 0; index < substringArr.length; index += 1) {
//     if (substringArr[index].length < 2) {
//       continue;
//     } else {
//       let reversedElement = substringArr[index].split('').reverse().join('');
//       if (substringArr[index] ===  reversedElement) {
//         newArr.push(substringArr[index]);
//       }
//     }
//   }
//   return newArr;
// }

console.log(substrings('knitting cassettes'));