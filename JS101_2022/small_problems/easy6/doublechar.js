/*
____________________________________
Problem

take a string and double each character and return new string

Input: string
Output: string
Explicit Rules:

Implicit Rules:
Questions:


____________________________________
Examples/test Cases
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
____________________________________
Data Structures, Algo
given string
take the string and split into an array for each character
iterate over each element using map method adding the element to itself
assign map method return value to doublechar variable
return doublechar
____________________________________
Code
*/

function repeater(string) {
  let doubleChar = string.split('').map(letter => {
    letter += letter;
    return letter;
  });
  console.log(doubleChar.join(''));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
