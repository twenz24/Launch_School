/*
input: string
output: boolean wehther the string can be constructed only on substrings
  within itself

algo

given the string
find all of the substrings
initialize an empty substringArr
  iterate through the string starting at 0
    slice the string from 0 to the current index and add it to substringArr
create a result variable initialized to false;
iterate through all of the substrings
  create a regex variable containing '[{element}+]`
  if a substring can be repeated to construct the full string
    result equals true

return result
*/

function repeatedSubstringPattern(string) {
  let substringArr = [];
  let result = false;
  for (let index = 1; index < string.length; index += 1) {
    substringArr.push(string.slice(0, index));
  }
  substringArr.forEach(element => {
    let testStr = element;
    while (testStr.length <= string.length) {
      if (testStr === string) {
        result = true;
        break;
      }
      testStr += element;
    }
  });
  return result;
}

console.log(repeatedSubstringPattern("abab"));
console.log(repeatedSubstringPattern("aba"));
console.log(repeatedSubstringPattern("aabaaba"));
console.log(repeatedSubstringPattern("abaababaab"));
console.log(repeatedSubstringPattern("abcabcabcabc"));