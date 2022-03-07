/*
____________________________________
Problem

take out the vowels of an array with n string elements

Input: array of strings
Output: array of string excluding the strings vowels

Rules:
uppercase vowels are included in result

Questions:
can we assume all arrays contain only string elements?
how should we handle non letter characters within the string?
what about empty array?
____________________________________
Examples/test Cases

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
____________________________________
Data Structures, Algo

given an array of strings
access the strings within the elements
  turn the strings into an array where each character is an element
  if the elements is an vowel return false
____________________________________
Code
*/

function removeVowels(stringArr) {
  return stringArr.map(strElement => {
    return strElement.split('').filter(char => {
      return !`aeiou`.includes(char.toLowerCase());
    }).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));