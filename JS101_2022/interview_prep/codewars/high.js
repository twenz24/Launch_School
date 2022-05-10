/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

    console.log(high('man i need a taxi up to ubud'));//, 'taxi');
    console.log(high('what time are we climbing up the volcano'));//, 'volcano'); 
    console.log(high('take me to semynak'));//, 'semynak');
    console.log(high('aa b'));//, 'aa');
    console.log(high('b aa');//, 'b');
    console.log(high('bb d');//, 'bb');
    console.log(high('d bb');//, 'd');
    console.log(high('aaa b');//, 'aaa');

input:
Output:

Rules:
- all inputs will be lowercase letters and valid
- a = 1 point... z = 26 points
- find the word with the highest score
- two words tie, return the one that is the first to appear in the string
- sentences deliminated by words?


DS:
NestedArray

Algo:
given a string
create an empty scoresArr init []
seperate the string into words and iterate throguh them
  split the string up by using the spaces as seperators, iterate using index
    give each word a score (helper)
    add the word and the score into the scores array as a nestedArr
return the word with the highest score
  sort the words from highest to lowest
    reutrn the 0 index word

find the score of the word
  create wordScore init to 0
  iterate through the word
    create a letter score that is the letters charCode minus a char code + 1
    add the score to wordScore
  return wordScore
*/

function high(str) {
  let scoresArr = [];
  let strArr = str.split(' ');
  strArr.forEach(element => {
    let score = wordScores(element);
    scoresArr.push([element, score]);
  });
  return scoresArr.sort((a, b) => b[1] - a[1])[0][0];
}

function wordScores(str) {
  let wordScore = 0;
  str.split('').forEach(char => {
    let score = (char.charCodeAt() - 'a'.charCodeAt()) + 1;
    wordScore += score;
  });
  return wordScore;
}


console.log(high('man i need a taxi up to ubud'));//, 'taxi');
console.log(high('what time are we climbing up the volcano'));//, 'volcano');
console.log(high('take me to semynak'));//, 'semynak');
console.log(high('aa b'));//, 'aa');
console.log(high('b aa'));//, 'b');
console.log(high('bb d'));//, 'bb');
console.log(high('d bb'));//, 'd');
console.log(high('aaa b'));//, 'aaa');
