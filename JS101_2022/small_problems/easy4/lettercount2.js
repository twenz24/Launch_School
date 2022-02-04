/*
____________________________________
Problem

Modify the removeNonLetters function from the previous exercise
to exclude non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.

Input: string
Output: obj with string count

Explicit Rules: exclude any non - letters from word size

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo

given a string
declare counterObj
seperate the string into words within an array
go through each word to see if there are any non letters
go through each letter of the word and check if it isLetter
add the letters back to the string
use the previouse word sizes to count the strings
____________________________________
Code
*/
function wordSizes(str) {
  let strArr = removeNonLetters(str.split(" "));
  let wordCountObj = {};
  strArr.forEach(word => {
    if (!wordCountObj.hasOwnProperty(word.length) && word !== '') {
      wordCountObj[word.length] = 1;
    } else if (word !== '') {
      wordCountObj[word.length] += 1;
    }
  });
  console.log(wordCountObj);
}
function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}
function removeNonLetters(arr) {
  return arr.map(word => {
    return word.split('').filter(char => {
      return (isLetter(char));
    }).join('');
  });
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                            // { "2": 1, "4": 1, "6": 1 }
wordSizes('');