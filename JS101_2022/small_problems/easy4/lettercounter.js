/*
____________________________________
Problem

Write a function that takes a string consisting of zero or
more space separated words and returns an object that shows the
number of words of different sizes.

Input: string
Output: object with tally of legnth of word occurences
Explicit Rules: words are deliminated with spaces

Implicit Rules:
Questions:
do we want to use puntion as its own word or a part of the last?


____________________________________
Examples/test Cases

wordSizes('Four score and seven.');      // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');
// { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");               // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
____________________________________
Data Structures, Algo

given a string
transform the string into words in an array
iterate through the words of the string
determine the length of the string
and add that to the counter for the length of that string
return the object that is counting the lengths
____________________________________
Code
*/

function wordSizes(str) {
  let strArr = str.split(" ");
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

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');