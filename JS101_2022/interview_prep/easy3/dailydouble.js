/*
____________________________________
Problem
given a string of double char, collapse the double characters so
  that only one character is showing
Input: string of doubles
Output: collapsed version of string

Rules:


Questions:
- how should we handle spaces
- do we need to account for words that are inherently double lettered

____________________________________
Examples/test Cases
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ")"
____________________________________
Data Structures, Algo
given a string
break the string into an array of characters
create a newString vairable that will house the collapsed string intialized
  to the first element in the strArr
iterate through the entire array
  if the index - 1 value of the charArr does not equal to index value
  add index value to newString

return newString
____________________________________
Code
*/

function crunch(string) {
  let strArr = string.split('');
  let newString = string[0] === undefined ? '' : string[0];
  for (let index = 1; index < strArr.length; index += 1) {
    if (strArr[index] !== strArr[index - 1]) {
      newString += strArr[index];
    }
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
