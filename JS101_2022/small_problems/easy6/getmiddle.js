/*
____________________________________
Problem

get the middle letter of a non empty string

Input: string
Output: letter/letters
Explicit Rules: if even legnth string return both of the middle char

Implicit Rules:
Questions:

____________________________________
Examples/test Cases
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
____________________________________
Data Structures, Algo
given a string
determine it length
if odd
return string index legnth / 2 - 1
if even
return string index length / 2
and
string index length /2 +1
____________________________________
Code
*/
function centerOf(string) {
  let strLength = string.length;
  let middleIndex = Math.floor(strLength / 2);
  if (strLength % 2 === 1) {
    return string[middleIndex];
  } else {
    return string[middleIndex - 1] + string[middleIndex];
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"