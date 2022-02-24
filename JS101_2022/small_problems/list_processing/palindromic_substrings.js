/*
____________________________________
Problem

find all of the palindromic substrings in the string

Input: string
Output: array of palindromic substrings

Rules:
- palindrome is case sensitive
- and special character sensitive

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
create a new array
take the passed string and split it up into all of the possible substrings
iterate through that substring array and check if the current substring
  equals the current substring reversed.
  if so,
  add that substring to the newArr
return the newArr
____________________________________
Code
*/


function palindromes(string) {
  let substringArr = substrings(string);
  console.log(substringArr);
  return substringArr.filter(element => {
    if (element.length > 1) {
      return element === element.split('').reverse().join('');
    } else {
      return false;
    }
  });
}

function substrings(string) {
  let newArr = [];
  string.split('').forEach(element => {
    let indexOfSub = string.indexOf((element));
    newArr = newArr.concat(leadingSubstrings(string.slice(indexOfSub)));
  });
  return newArr;
}

function leadingSubstrings(str) {
  let currentSub = "";
  return str.split('').map(char => {
    currentSub += char;
    return currentSub;
  });
}


console.log(palindromes('abcd'));
