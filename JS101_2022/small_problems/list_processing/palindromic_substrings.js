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
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}


console.log(palindromes('knitting cassettes'));