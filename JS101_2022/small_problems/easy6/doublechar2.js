/*
____________________________________
Problem

only double specified characters

Input: string
Output: doubled string
Explicit Rules:
can't double vowels, puncuation, or white space

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
____________________________________
Data Structures, Algo

given a string
take the string and split into an array
iterate through the array
check if the character is valid
if so return a doubled version back
if not
return the same

join the array and log to console

____________________________________
Code
*/
function doubleConsonants(string) {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    stringArray.push(string[idx]);
    if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
      stringArray.push(string[idx]);
    }
  }

  return stringArray.join("");
}
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""


