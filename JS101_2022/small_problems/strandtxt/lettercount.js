/*
____________________________________
Problem

Input: string
Output: object with properties taht count uppercase letters, lowercase letters,
and neither

Rules:
an empty string results in no change to the array

Questions:


____________________________________
Examples/test Cases

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
____________________________________
Data Structures, Algo

given a string
declare a variable initialized to an object that contains
properties that count the upper lower and neither case within the string
create a variable that seperates the string into seperate characters within
the array
iterate over the entire array
  if the current element has a char code within the range for lower case
    add a count to the lower case value
  if the current element has a char code within the range for upper case
    add a count to the upper case value
  else
  add one to the neither category

  return the object counter

____________________________________
Code
*/

function letterCaseCount(string) {
  let tallyObject = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  let stringArr = string.split('');
  stringArr.forEach(element => {
    let elementCharCode = element.charCodeAt();
    if (elementCharCode >= 65 && elementCharCode <= 90) {
      tallyObject.uppercase += 1;
    } else if (elementCharCode >= 97 && elementCharCode <= 122) {
      tallyObject.lowercase += 1;
    } else {
      tallyObject.neither += 1;
    }
  });
  return tallyObject;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));