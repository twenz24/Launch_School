/*
____________________________________
Problem

Input: string
Output: string with words legnth > 5 reversed

Rules:

-legnth > 5 reversed

Questions:

____________________________________
Examples/test Cases
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
____________________________________
Data Structures, Algo
given a string
split the string up into words stored in an array
iterate through the string
  if the words length are greater than five reverse the word
  and add it back into the array
return the tranformed array
____________________________________
Code
*/

function reverseWords(string) {
  let newArr = string.split(' ');
  let reverseArr = newArr.map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    } else {
      return word;
    }
  });
  console.log(reverseArr.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"