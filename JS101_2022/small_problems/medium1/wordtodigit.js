/*
____________________________________
Problem

Input: string with number words
Output: string with number words replaced by real words

Rules:
replacing only number 0-9
nothing else should be altered


Questions:
what about empty string?

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo

given a string
create an object with the number as strings and their corresponding
  number value
create a newArr variable that will store the an array with the new string values
return the newArr joined with spaces
____________________________________
Code
*/

/* function wordToDigit(string) {
  let translateObj = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9
  };

  let newArr = string.split(" ").map(word => {
    let refinedWord = word.split('').filter(char => !(`!.,?#`.includes(char))).join('');
    if (Object.keys(translateObj).includes(word.toLowerCase())) {
      return translateObj[refinedWord];
    } else if (Object.keys(translateObj).includes(refinedWord.toLowerCase())) {
      return translateObj[refinedWord] + word[word.length - 1];
    }
    return word;
  });
  return newArr.join(" ");
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.')); */
