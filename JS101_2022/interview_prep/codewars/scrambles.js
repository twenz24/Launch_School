/*
console.log(Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
console.log(scramble('rkqodlw', 'world')); ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); ==> True
console.log(scramble('katas', 'steak')); ==> False

Input:
Output:

Rules:

*/

function scramble(str1, str2) {
  return str2.split('').find(char => str1.includes(char));
}

console.log(scramble('rkqodlw', 'world'));// ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars'));// ==> True
console.log(scramble('katas', 'steak'));// ==> False