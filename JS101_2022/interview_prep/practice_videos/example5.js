/*

input: two strings
output is boolean

get substrings of both strings
iterate through the first substring
iterate through the second substring
if any of the substrings === each other
  assign true to result

return substring

getSubString
given a string
create substringArr
iterate through the array at every index
iterate through the array at every index + 1
  create a substring variable housing the substring from outer index to inner +1
  if that substring is greater than 1 in length
  add each substring to the substring arr
return substringArr
*/

function substringTest(str1, str2) {
  let str1Arr = getSubstring(str1);
  let str2Arr = getSubstring(str2);
  let returnValue = false;

  for (let outer = 0; outer < str1Arr.length; outer += 1) {
    for (let inner = 0; inner < str2Arr.length; inner += 1) {
      if (str1Arr[outer].toLowerCase() === str2Arr[inner].toLowerCase()) {
        returnValue = true;
      }
    }
  }
  return returnValue;
}

function getSubstring(string) {
  let returnArr = [];
  for (let outer = 0; outer < string.length; outer += 1) {
    for (let inner = 0; inner < string.length; inner += 1) {
      let substring = string.slice(outer, inner + 1);
      if (substring.length > 1) {
        returnArr.push(substring);
      }
    }
  }
  return returnArr;
}

console.log(substringTest('Something', 'Fun'));
console.log(substringTest('Something', 'Home'));
console.log(substringTest('Something', ''));
console.log(substringTest('Banana', 'BANANA'));
console.log(substringTest('', 'Something'));
console.log(substringTest('', ''));

