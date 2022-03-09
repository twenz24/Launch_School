/*
____________________________________
Problem

Input: string
Output: string with all words capilized

Rules:

quotes do not get capitlized
all previously capitlized non first letter char should be lowercase

Questions:

no

____________________________________
Examples/test Cases

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

____________________________________
Data Structures, Algo

given a string
create an array with the words within the passed string
iterate through the arr usiing a transformation method
  if the string starts with a letter
    return result of the string using a function to capitlize it
  otherwise
    return the string
return the resulting array from the transformation method


____________________________________
Code
*/

function wordCap(string) {
  let stringArr = string.split(' ');
  let capitalsString = stringArr.map(element => {
    if (element[0].toLowerCase() >= `a` && element[0].toLowerCase() <= `z`) {
      return capitalize(element);
    } else {
      return element;
    }
  });
  return capitalsString.join(' ');
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));