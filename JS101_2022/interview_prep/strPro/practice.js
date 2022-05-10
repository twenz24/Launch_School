/*

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'

Input: string
Output: decoded string

Rules:

- no special characters only letters and spaces
- a word is defined by a space after
- first letter of each word is char code
- second and last letter is switched

algo:
given a string
sepearte each word into seperate words in a array
access each word in the array
decode the first letter
  iterate through the char in each word
    set numberStr to ""
    if the char is a number
      add the char to numberStr
  find the char at the numberStr
  take the character and add it to the string copy at 0
swap the second and last letter
  set secondletter to the second letter in the word
  set lastletter to the last letter in the word
  iterate thorugh the characters in the word
    if it is the second letter
      assign that letter to last letter
    if it is the last letter
      assign that letter to the second letter
  reutrn the combined words in the string


*/

function decipherThis(str) {
  let wordArr = str.split(' ');
  for (let index = 0; index < wordArr.length; index += 1) {
    let word = wordArr[index];
    word = decodeFirst(word);
    word = swap(word);
    wordArr[index] = word;
  }
  return wordArr.join(" ");
}

function isNumber(char) {
  return '0123456789'.includes(char);
}

function decodeFirst(word) {
  let wordChars = word.split('');
  let numbers = '';
  wordChars.forEach(char => {
    if (isNumber(char)) {
      numbers += char;
    }
  });
  let firstLetter = String.fromCharCode(Number(numbers));
  return firstLetter + word.slice(numbers.length);
}

function swap(word) {
  let secondLetter = word[1];
  let lastLetter = word[word.length - 1];
  let wordArr = word.split('');
  if (word.length < 3) {
    return word;
  } else {
    wordArr[1] = lastLetter;
    wordArr[word.length - 1] = secondLetter;
  }
  return wordArr.join('');
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
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
*/
/* 
You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1
sum of 3 consecutives 4 is 12
sum of 0... and sum of 2
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]

    console.log(sumConsecutives([1,4,4,4,0,4,3,3,1])); // ==> [1,12,0,4,6,1]
    console.log(sumConsecutives([1,1,7,7,3])); // ==> [2,14,3]
    console.log(sumConsecutives([-5,-5,7,7,12,0])); // ==> [-10,14,12,0]
    console.log(sumConsecutives([3,3,3,3,1])); // ==> [12, 1]
 */

 // Background
// There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

// Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

// In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

// Requirement
// return a string where:

// the first and last characters remain in original place for each word
// characters between the first and last characters must be sorted alphabetically
// punctuation should remain at the same place as it started, for example: shan't -> sahn't
// Assumptions

// words are seperated by single spaces
// only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
// special characters do not take the position of the non special characters, for example: -dcba -> -dbca
// for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
// ignore capitalisation


/* console.log(scrambleWords('professionals') === 'paefilnoorsss'); //, 'The first and last letters of a word should reamin in place with the inner letters sorted')
console.log(scrambleWords('i') === 'i'); //, 'Must handle single charater words')
console.log(scrambleWords('me') === 'me'); //, 'Must handle 2 charater words')
console.log(scrambleWords('you') === 'you'); //, 'Must handle 3 charater words')
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); //, 'Only spaces separate words and punctuation should remain at the same place as it started')
console.log(scrambleWords("shan't") === "sahn't"); //, 'Punctuation should remain at the same place as it started')
console.log(scrambleWords('-dcba') === '-dbca'); //, 'Must handle special character at the start')
console.log(scrambleWords('dcba.') === 'dbca.'); //, 'Must handle special character at the end')
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") === "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."); //, 'Must handle a full sentence') */

/*

Input: a string of words
Output: the string of words, with every word's middle (letters between index 0 if letter and last letter index) sorted in alphabetical order

Rules:

- first and last letters should remain in the same order
- middle letters should be sorted in alphabetic order
- any special characters should remain in the same place
- words are seperated by spaces
- case insensitive
- the 4 special characters will be -hyphen, apostrophe', comma , , period. 
- no numbers within the string

DS:
Array

-your's
yours
-yoru's
Algo:
given a string
seperate the string into words (words are seperated by spaces)
create a special characterArr
transform each word
  take out the special characters within the word (store within an array the special character and index)
    seperate the word into characters
    if the character is a letter
      return true
    return false
  modify the remaining character by adding the first character to the middle sorted alphabetically and adding the last letter
  join the array back together into a string
    add the first letter to the sorted middle to the last letter
 return this result add back in the special characters (helper)
    given an array of a newString and the originalStr
      create the stringArr from the passedArr (characters within the array)
      create a newArr to []
      iterate throgh our originalStr
      if the char is not a letter
        add that character to the array
        continue to the next Char
      if not
        add the character from the stringArr
    return the joined Arr
return the joined newArr

*/

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
}

function scrambleWords(str) {
  let strArr = str.split(' ');
  let newArr = strArr.map(word => {
    let filterWord = word.split('').filter(char => isLetter(char)).join('');
    let newMiddle = filterWord.slice(1, filterWord.length - 1);
    newMiddle = newMiddle.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
    let sortedWord = filterWord[0] + newMiddle + filterWord[filterWord.length - 1];
    return addBackChar(sortedWord, word);
  });
  return newArr.join(' ');
}

function addBackChar(newStr, oldStr) {
  let stringArr = oldStr.split('');
  let newStrArr = newStr.split('');
  let returnWord = [];
  for (let index = 0; index < stringArr.length; index += 1) {
    let currentChar = stringArr[index];
    if (!isLetter(currentChar)) {
      returnWord.push(currentChar);
    } else {
      returnWord.push(newStrArr.shift());
    }
  }
  return returnWord.join('');
}

console.log(scrambleWords('professionals') === 'paefilnoorsss'); //, 'The first and last letters of a word should reamin in place with the inner letters sorted')
console.log(scrambleWords('i') === 'i'); //, 'Must handle single charater words')
console.log(scrambleWords('me') === 'me'); //, 'Must handle 2 charater words')
console.log(scrambleWords('you') === 'you'); //, 'Must handle 3 charater words')
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); //, 'Only spaces separate words and punctuation should remain at the same place as it started')
console.log(scrambleWords("shan't") === "sahn't"); //, 'Punctuation should remain at the same place as it started')
console.log(scrambleWords('-dcba') === '-dbca'); //, 'Must handle special character at the start')
console.log(scrambleWords('dcba.') === 'dbca.'); //, 'Must handle special character at the end')
console.log(scrambleWords("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") === "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."); //, 'Must handle a full sentence')

//Gianni
function scramble(currentWord) {
  if (currentWord.length <= 3) {
    return currentWord;
  }
  const SPECIAL_CHARACTERS = ["'", ",", ".", "-"];
  let firstLetter = "";
  let lastLetter = "";
  let chars = currentWord.split("");
  for (let index = 0; index < chars.length; index++) {
    if (isLetter(chars[index])) {
      firstLetter += chars.splice(index, 1);
      break;
    }
  }
  for (let index = chars.length - 1; index >= 0; index--) {
    if (isLetter(chars[index])) {
      lastLetter += chars.splice(index, 1);
      break;
    }
  }
  chars = chars.filter(character => !SPECIAL_CHARACTERS.includes(character));
  let result = firstLetter + chars.sort().join("") + lastLetter;
  let specialChars = currentWord.split("").filter(character => SPECIAL_CHARACTERS.includes(character));
  result = result.split("");
  for (let index = 0; index <= currentWord.length; index++) {
    if (SPECIAL_CHARACTERS.includes(currentWord[index])) {
      result.splice(index, 0, (specialChars.shift()));
    }
  }
  return result.join("");
}

function isLetter(inputStr) {
  return inputStr.toLowerCase() >= "a" && inputStr.toLowerCase() <= "z"
}

function scrambleWords(inputStr) {
  let words = inputStr.split(" ");

  /*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

/*
Problem:
- assess if the characters within the string appear more than once
- add '(' if they appear once
- add a ')' if they appear more than once

Input: String
Output: String

Rules:
- assess if the characters within the string appear more than once
- add '(' if they appear once
- add a ')' if they appear more than once
- case insensitive
- always strings
- can be any type of character (special, numbers, etc)

DS:
array

algo:
given a string
access each character within the string
  change the string into lowercase and split the string up into character of an array
check and see how many times that character appears in the string
  if the counter is greater than 1 return a ) if not return a (
add either a ( ) based on how many times they appear
return the added string

helper howManyTimes(char, arr)
count feature
iterate through the array
  if the current element equals the string
    add 1 to the counter
return the counter

*/

function paranthesis(str) {
  let lowercaseArr = str.toLowerCase().split('');
  return lowercaseArr.map((char, _, arr) => {
    return howManyTimes(char, arr) > 1 ? ')' : '('
  }).join('');
  }
  
  function howManyTimes(char, arr) {
    let counter = 0
    for (let index = 0; index < arr.length; index += 1) {
      if (char === arr[index]){
        counter += 1;
      }
    }
    return counter;
  }
  /* "din"      =>  "((("
  "recede"   =>  "()()()"
  "Success"  =>  ")())())"
  "(( @"     =>  "))(("  */
  
  console.log(paranthesis('din'));
  console.log(paranthesis('recede'));
  console.log(paranthesis('Success'));
  console.log(paranthesis('(( @'));

  // Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.

/* console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10 */


/*
Input: two strings
Output: the number of letters the two have to reduce to become anagrams

Rules:
- only lowercase letters
- only strings
- A word is an anagram of another word if they have the same letters


Algo:
given str1, str2
find the anagram that is between the two
subtract that length of the anagram from both of the strings lengths
  create a  countObject1
  iterate through each str1
    if the property is not there we will add a property with the character and 1 as value
    else we will add 1 to the property

  create a  countObject2
  iterate through each str2
    if the property is not there we will add a property with the character and 1 as value
    else we will add 1 to the property

  take both object and turn them into array
  create an arrayofCommonLetters
  iterate thorough countArr1
    create outerArr
    iterate tough countArr2
      create innerArr
      if outerArr at index 0 is same as inner and
        outerArr at index 1 is greater than or equal to innerArr
      addChar passing the smallest number, the char and the array

return the sum of the differences of the string

helper addChar
  given a number a char, an array
  iterate the number of times as number
    add the char to the array
*/

/* function anagramDifference(str1, str2) {
  let countArr1 = Object.entries(createCounterObject(str1));
  let countArr2 = Object.entries(createCounterObject(str2));
  let anaLetters = [];
  for (let outer = 0; outer < countArr1.length; outer += 1) {
    let outerArr = countArr1[outer];
    for (let inner = 0; inner < countArr2.length; inner += 1) {
      let innerArr = countArr2[inner];
      if (innerArr[0] === outerArr[0]) {
        let number = [innerArr[1], outerArr[1]].sort((a, b) => a - b)[0];
        addChar(number, innerArr[0], anaLetters);
      }
    }
  }
    let anaStringLength = anaLetters.join('').length;
    let str1Length = str1.length - anaStringLength;
    let str2Length = str2.length - anaStringLength;
  return str1Length + str2Length;
}

function createCounterObject(str) {
  let counter = {}
  for (let index = 0; index < str.length; index += 1) {
    if (!counter.hasOwnProperty(str[index])) {
      counter[str[index]] = 1;
    } else {
      counter[str[index]] += 1;
    }
  }
  return counter;
}

function addChar(number, char, arr) {
  for (let index = 0; index < number; index += 1) {
    arr.push(char);
  }
}

console.log(anagramDifference("",""));      // 0
console.log(anagramDifference("a",""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab","a"));   // 1
console.log(anagramDifference("ab","cd"));  // 4
console.log(anagramDifference("aab","a"));  // 2
console.log(anagramDifference("a","aab"));  // 2
console.log(anagramDifference("codewars","hackerrank")); // 10 */

// Write a function that, given a string of text (possibly with punctuation and line-breaks),
//returns an array of the top 3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
// or an empty array if a text contains no words.

// Test Cases:
// console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]
// console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // => ["e", "ddd", "aa"]
// console.log(topThreeWords("  //wont won't wont")); // => ["wont", "won't"]
// console.log(topThreeWords("  ...  ")); // []
// console.log(topThreeWords("  '  ")); // []

/*

Input: String
Output: an array of words that are in descending order based on occurences

Rules:'
- case insentive
- ties may be broken arbitrarily
- empty strings should return empty arrays
- words are letters and apostrophes, nothing else is included in a word
- return the array iun descending order

DS:
array
object

Algo:
given a string
seperate all of the words
  change the string itno all lowercase
  split up the string using spaces as the seperator
filter the array to only include valid words
  transfrom the words into valid words
count up all of the words into an object
  create countObj
  iterate through the validWords Array
    if the validWord is in the object
      add one to that property
    if not 
      create that property to the value of one
return the top 3 occuring words in an array, within the object
  coerce the object into an array
    sort the array based on the counts of the properties
      if the array is less than 3
        return the first index of the nested array
      else return the first 3 0 indexs within the nested arrays

function validWords(str)
  split the string up into characters
    select only the valid word characters (-, , letters)
     if it isnt a valid letter than we will
      not return it
    if it is we will return it

  reutrn the result of the selection
*/

function topThreeWords(str) {
  let lowercaseArr = str.toLowerCase().split(' ');
  let validWordsArr = lowercaseArr.map(word => {
    return validWord(word);
  }).filter(word => !(word === "'" || word === ""));
  let obj = countObject(validWordsArr);
  let countArr = Object.entries(obj);
  countArr.sort((a, b) => b[1] - a[1]);
  if (countArr.length >= 3) {
    return [countArr[0][0], countArr[1][0], countArr[2][0]]
    }
  else {
    return lessThanThree(countArr);
    }
  }
}

function lessThanThree(arr) {
  let returnArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    returnArr.push(arr[index][0]);
  }
  return returnArr;
}

function countObject(arr) {
  let count = {};
  arr.forEach(word => {
    if (count.hasOwnProperty(word)) {
      count[word] += 1
    } else {
      count[word] = 1
    }
  });
  return count;
}

function validWord(str) {
  let strArr = str.split('');
  let filterArr = strArr.filter(char => {
      return char === '-' || char === "'" || isLetter(char);
  });
  return filterArr.join('');
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}


console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // => ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't wont")); // => ["wont", "won't"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []

//Gianni
function topThreeWords(inputStr) {
  let words = inputStr.split(/[^a-z']/gi);
  words = words.filter((word) => word !== "");
  words = words.filter((word) => word !== "'");
  
  let count = {};
  words.forEach(word => {
    let currentWord = word.toLowerCase()
    if (count[currentWord]) {
      count[currentWord] += 1;
    } else {
      count[currentWord] = 1;
    }
  })
  
  let sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);
  let result = [];
  let index = 0;
  while (index < 3 && index < sortedCount.length) {
    result.push(sortedCount[index][0]);
    index += 1;
  }
  return result;
}
