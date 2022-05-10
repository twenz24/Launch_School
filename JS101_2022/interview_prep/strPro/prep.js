/* eslint-disable max-lines-per-function */
// Write a function that, given a string of text (possibly with punctuation and line-breaks),
//returns an array of the top 3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
// or an empty array if a text contains no words.

// Examples:
/* console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // => ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't won't")); // => ["won't", "wont"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // [] */

/*

Rules:
-A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII
- matches should be case insensitive
- ties broken arbitratily
- string with no words will return an empty array



Input: string
Output: an array of top 3 occuring words
edge cases:

if there are no words ==> empty array
if thereare less than 3 words ===> will return the <2 words array

algorithm:
given a string
break down the string into words
  split the chacters using spaces, hyphens, or or any special characters other than '
    using regEx split using three characters specifc
go through and check to see how many times the words occurrences
create a object
iterate through our word array
  if the object does not include the current word as a property
    add that word in lowercase to the object initialized to 1
  if it does contain it we will want to add 1 to the value of the property
return the top 3 most occuring words in an array
  object and get the entires for the object
    sort the entires by there values highest to lowest
add the first 3 property of the entires within a newArr that returned

*/

// eslint-disable-next-line max-lines-per-function
function topThreeWords(string) {
  let regEx = new RegExp('[^a-z\']', 'ig');
  let strArr = string.split(regEx);
  let object = {};
  for (let index = 0; index < strArr.length; index += 1) {
    let word = strArr[index];
    let lowercaseWord = word.toLowerCase();
    if (word === '' || word === "'") {
      continue;
    } else if (!Object.keys(object).includes(lowercaseWord)) {
      object[lowercaseWord] = 1;
    } else {
      object[lowercaseWord] += 1;
    }
  }
  let objectArr = Object.entries(object);
  objectArr.sort((a, b) => b[1] - a[1]);
  let numberOfIterations = objectArr.length >= 3 ? 3 : objectArr.length;
  let returnArr = [];
  for (let index = 0; index < numberOfIterations; index += 1) {
    returnArr.push(objectArr[index][0]);
  }
  return returnArr;
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]
console.log(topThreeWords("  //wont won't won't"));
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // [] */

// Revealing the Primes

// Create a function that takes a string and returns an array of all of the letters represented as either  prime numbers or as hyphens. A letter should be turned into a prime number if its 0 index alphabetic location is prime. Case-insensitive. Spaces should be included as is in the array.

// For example, since 'c' is the third letter in the alphabet, and assuming 0 index, this would make 'c' have an index of two, and since two is a prime letter, 'c' would be represented as '2', whereas for example 'e' would be represented as '-' since it's index is not prime (4).

/* console.log(revealPrimes("Hello World"));
// [7, '-', 11,  11, '-', ' ', '-', '-', 17, 11, 3]

console.log(revealPrimes("The Quick Brown Fox Jumps Over The Lazy Dog")); */

//[19,  7,   '-', ' ', '-', '-', '-', 2,   '-', ' ', '-', 17,  '-', '-', 13,  ' ', 5,   '-', 23,  ' ', '-', '-', '-', '-', '-', ' ', '-', '-', '-', 17,  ' ', 19,  7,   '-', ' ', 11, 0,   '-', '-', ' ', 3,   '-', '-']

/*

Input: string
output: an array of all letters represented either as prime numbers or as hyphens
Rules:
- case insensitive (
- include spaces within the array
- only prime letters should be included within the return array
  - a prime letter is a letter with its 0 index number being only divisible by itself
    - prime numbers are only divisible by 1 and itself starting at 2
- working with upper and lowercase letters (both have the same o index)

DS:
- string
output: array

use an array

keep our spaces as is in the newArr

algo:
given a string
seperate each character
  split up the string into characters within an array
iterate through each character
  if the character is a " " than we will want to add the space into the returnArr
find out if the individual characters are prime (helper?)
    set letterIndex to  the letter index (using our charCodes starting at 'a') charCode of letter subtracted by  charCode of a
    if the letterIndex is a prime number
      return the indexLetter number to the new array
     if not,
     return a hyphen
return the returnArr

helper
(iterate through from index = 2 to letterIndex
        check to see if the only letter that evenly divides the letterIndex is itself)
        if the letter index is evenly divided by the letterIndex
          add it to the indexArr
      if the indexArr is a length of 1
        it is a prime letter
*/


/*
function revealPrimes(string) {
  const CODE_OF_LETTER_A = 'a'.charCodeAt();

  let strArr = string.split('');
  let returnArr = strArr.map(char => {
    let letterIndex = char.toLowerCase().charCodeAt() - 'a'.charCodeAt();
    if (char === " ") {
      return " ";
    } else if (isPrime(letterIndex)) {
      return letterIndex;
    } else {
      return '-'
    }
  });
  return returnArr;
}

function isPrime(number) {
  let primeArr = [];
  for (let index = 2; index <= number; index += 1) {
    if (number % index === 0) {
      primeArr.push(index);
    }
  }
  if (primeArr.length === 1) {
    return true;
  } else {
    return false;
  }
}

console.log(isPrime(3)) */

//console.log(revealPrimes("Hello World") === [7, '-', 11,  11, '-', ' ', '-', '-', 17, 11, 3]);

//console.log(revealPrimes("The Quick Brown Fox Jumps Over The Lazy Dog") === [19,  7,   '-', ' ', '-', '-', '-', 2,   '-', ' ', '-', 17,  '-', '-', 13,  ' ', 5,   '-', 23,  ' ', '-', '-', '-', '-', '-', ' ', '-', '-', '-', 17,  ' ', 19,  7,   '-', ' ', 11, 0,   '-', '-', ' ', 3,   '-', '-']);

/*
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Examples:
deleteDigit(152); --> 52
deleteDigit(1001); --> 101

*/

/* import { dropRightWhile } from "lodash"

Rules:
- delete one number from the given number input

input: number
output: largest number with one less dropRightWhile

data structure
array to store those numbers

example:

1001
001
101
101
100

algo:
given a number
find all possible numbers with one less digit
  take the number and split the number into a string then an array
  iterate through the numberArr starting at index 0
    store the number at index to origValue
    set the number at index to ""
    add the joined number to the return Array
    we will reassign the number at indes to the original value
go through each one of those and find the largest one.

sort the number values based on the highest

return the largest */
/*
function deleteDigit(number) {
  let numberArr = String(number).split('');
  let returnArr = [];
  for (let index = 0; index < numberArr.length; index += 1) {
    let origDigit = numberArr[index];
    numberArr[index] = '';
    returnArr.push(Number(numberArr.join('')));
    numberArr[index] = origDigit;
  }
  returnArr.sort((a, b) => b - a);
  console.log(returnArr[0]);
}
deleteDigit(1001);
deleteDigit(152); */


// eslint-disable-next-line max-statements
function ScrambleWords(string) {
  let strArr = string.split(' ');
  let newArr = [];
  if (string.length === 1) {
    return string;
  } else {
    for (let outer = 0; outer < strArr.length; outer += 1) {
      let currentWord = strArr[outer];
      let letterString = [];
      let alphabetizedMid = '';
      let charObj = {};
      if (currentWord.length === 1) {
        newArr.push(currentWord);
      } else {
        for (let inner = 0; inner < currentWord.length; inner += 1) {
          let currentChar = currentWord[inner];
          if (isLetter(currentChar)) {
            letterString.push(currentChar);
          }
          else {
            charObj[currentChar] = inner;
          }
        }
        let alphaMiddle = letterString.slice(1, letterString.length - 1).sort((a, b) => {
          return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
        }).join('');
        alphabetizedMid = letterString[0] + alphaMiddle + letterString[letterString.length - 1];
        Object.entries(charObj).forEach(element => {
          alphabetizedMid = alphabetizedMid.slice(0, element[1]) + element[0] + alphabetizedMid.slice(element[1]);
        });
        newArr.push(alphabetizedMid);
      }
    }

    return newArr.join(' ');
  }
}

function isLetter(string) {
  return string.toLowerCase() >= 'a' && string.toLowerCase() <= 'z';
}

/*
// Write a function that takes an array of integers for the first argument and an integer(n) as the second argument.  If the value of the second argument(n) is found in the input array exactly n times then return true, if the second argument (n) is not found in the array, return null.

// If the second argument(n) is found in the input array, but not n times, then return an array of the original element values, but with the second parameter value (n) appearing the correct number of times(n) sorted ascending.

// The first argument will always be an array with a length from 0 to 20 elements long.  The second argument will always be an integer, but could be positive or negative

Example:
console.log(messy([], 4)); // null
console.log(messy([1], 1)); // true
console.log(messy([1, 2, 2, 3, 4, 5], 2));  // true
console.log(messy([1, 2, 3, 4, 5], -1));  // null
console.log(messy([1, 2, 3, 4, 5], 0));  // true
console.log(messy([4, 1, 2, 3, 4, 5, 4, 99, 101, 2, 1, 3, 4], 4)); // true
console.log(messy([1, 2, 3, 4, 5], 2));  // [1, 2, 2, 3, 4, 5]
console.log(messy([1, 3, 2, 3, 4, 5, 3, 6, 3], 3)); // [1, 2, 3, 3, 3, 4, 5, 6]
console.log(messy([1, 2, 2, 4, 2, 5, 2, 6, 2, 7, 2], 2));  // [1, 2, 2, 4, 5, 6, 7]

Rules:

- input: an array of positive or negative numbers, (array can be  0 to 20 length), number n
-output: if the number is in the array n times than  true,  otherwise return  null if number n does not appear
 if it does but not n times, return the original array but has the correct number of n

 - if n doesnt appear return null
 - if it does but not the correct number of times, return new array with n n number of times
 - if if the n shows up more than n times than remove n's to reuduce count to correct number within the array
- sort the new array in ascending order
Data Structure:
- array

console.log(messy([1, 2, 2, 3, 4, 5], 2));  // true

algo:
give an array and number as input
check to see if n is n the array n number of times
  create a counter initialized to 0
  iterate through the array
    if the element ===  n
          add 1  to counter
if our counter === n
  we will return true
if n appears 0 times return null
  if counter === 0
    return null
if n appears 1 or more times not equal to n 
  create a new array with n the correct number of  timess
  create a new array with n filtered out
    iterate through the original array take out all instances of n
    then iterate from index 0 to n
      add n, n number of times to the array
return the sorted array
*/
/*
function messy(array, number) {
  let counter = 0;
  array.forEach(element => {
    if (element === number) {
      counter += 1;
    }
  });
  if (counter === number) {
    return true;
  } else if (counter === 0) {
    return null;
  } else {
    let filterArr = array.filter(element => element !== number);
    for (let index = 0; index < number; index += 1) {
      filterArr.push(number);
    }
    return filterArr.sort((a, b) => a - b);
  }
}

console.log(messy([], 4)); // null
console.log(messy([1], 1)); // true
console.log(messy([1, 2, 2, 3, 4, 5], 2));  // true
console.log(messy([1, 2, 3, 4, 5], -1));  // null
console.log(messy([1, 2, 3, 4, 5], 0));  // true
console.log(messy([4, 1, 2, 3, 4, 5, 4, 99, 101, 2, 1, 3, 4], 4)); // true
console.log(messy([1, 2, 3, 4, 5], 2));  // [1, 2, 2, 3, 4, 5]
console.log(messy([1, 3, 2, 3, 4, 5, 3, 6, 3], 3)); // [1, 2, 3, 3, 3, 4, 5, 6]
console.log(messy([1, 2, 2, 4, 2, 5, 2, 6, 2, 7, 2], 2));  // [1, 2, 2, 4, 5, 6, 7]
/*
/*
// Write a function that takes an array of integers for the first argument and an integer(n) as the second argument.  If the value of the second argument(n) is found in the input array exactly n times then return true, if the second argument (n) is not found in the array, return null.

// If the second argument(n) is found in the input array, but not n times, then return an array of the original element values, but with the second parameter value (n) appearing the correct number of times(n) sorted ascending.

// The first argument will always be an array with a length from 0 to 20 elements long.  The second argument will always be an integer, but could be positive or negative

Example:
console.log(messy([], 4)); // null
console.log(messy([1], 1)); // true
console.log(messy([1, 2, 2, 3, 4, 5], 2));  // true
console.log(messy([1, 2, 3, 4, 5], -1));  // null
console.log(messy([1, 2, 3, 4, 5], 0));  // true
console.log(messy([4, 1, 2, 3, 4, 5, 4, 99, 101, 2, 1, 3, 4], 4)); // true
console.log(messy([1, 2, 3, 4, 5], 2));  // [1, 2, 2, 3, 4, 5]
console.log(messy([1, 3, 2, 3, 4, 5, 3, 6, 3], 3)); // [1, 2, 3, 3, 3, 4, 5, 6]
console.log(messy([1, 2, 2, 4, 2, 5, 2, 6, 2, 7, 2], 2));  // [1, 2, 2, 4, 5, 6, 7]

Rules:

- input: an array of positive or negative numbers, (array can be  0 to 20 length), number n
-output: if the number is in the array n times than  true,  otherwise return  null if number n does not appear
 if it does but not n times, return the original array but has the correct number of n

 - if n doesnt appear return null
 - if it does but not the correct number of times, return new array with n n number of times
 - if if the n shows up more than n times than remove n's to reuduce count to correct number within the array
- sort the new array in ascending order
Data Structure:
- array

console.log(messy([1, 2, 2, 3, 4, 5], 2));  // true

algo:
give an array and number as input
check to see if n is n the array n number of times
  create a counter initialized to 0
  iterate through the array
    if the element ===  n
          add 1  to counter
if our counter === n
  we will return true
if n appears 0 times return null
  if counter === 0
    return null
if n appears 1 or more times not equal to n 
  create a new array with n the correct number of  timess
  create a new array with n filtered out
    iterate through the original array take out all instances of n
    then iterate from index 0 to n
      add n, n number of times to the array
return the sorted array
*/

/*
Sherlock has to find suspects on his latest case. He will use your method, dear Watson. Suspect in this case is a person which has something not allowed in his/her pockets.

Allowed items are defined by array of numbers.

Pockets contents are defined by map entries where key is a person and value is one or few things represented by an array of numbers (can be nil or empty array if empty), example:

pockets = { 
  bob: [1],
  tom: [2, 5],
  jane: [7]
}

Write method which helps Sherlock to find suspects. If no suspect is found or there are no pockets (pockets === {}), the method should return null.

find_suspects(pockets, [1, 2]) # => [:tom, :jane]
find_suspects(pockets, [1, 7, 5, 2]) # => null
find_suspects(pockets, []) # => [:bob, :tom, :jane]
find_suspects(pockets, [7]) # => [:bob, :tom]x

*/

/*

Problem:
 finding the suspects
  - a suspect is someone who has a number within their pockets array, that is not included in the allowed items
  - allowed items are specified as second argument, can be empty can have n + number of elements
  - the pocket of each person can be an array of numbers or null or empty array


  Input:  obj,,  array of allowed  items
  OUtput:  array of suspect names

  Data:
  array

  algorithm
  given an obj and an  array
  check and see who is a suspect
    create a suspects array initialize it to an empty array
    if our 
    iterate through the arrays within the obj (creating an array with the obj properties)
      if the elements within the arrays are not included within the allowedItems array 
        add the name of that person to the suspectsArr
  return if the suspects array is empty return null otherwise return the names of the suspects within an array
*/

/* function find_suspects(obj, allowedItems) {
  let suspects = [];
  let objArr = Object.entries(obj);
  objArr.forEach(prop => {
    prop[1].forEach(pocket => {
      if (!allowedItems.includes(pocket) && !suspects.includes(prop[0])) {
        suspects.push(prop[0]);
      }
    });
  });
console.log(suspects.length === 0 ? null : suspects);
}
let pockets = { 
  bob: [1],
  tom: [2, 5],
  jane: [7]
}

/* Write method which helps Sherlock to find suspects. If no suspect is found or there are no pockets (pockets === {}), the method should return null.
*/
find_suspects(pockets, [1, 2])// [:tom, :ja
find_suspects(pockets, [1, 7, 5, 2]) // # => null
find_suspects(pockets, []) // => [:bob, :tom, :jane]
find_suspects(pockets, [7]) // => [:bob, :tom] */

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


Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

console.log(duplicateCount(""));// ==> 0);
console.log(duplicateCount("abcde"));// ==> 0);
console.log(duplicateCount("aabbcde"));// ==> 2
console.log(duplicateCount("aabBcde"));// ==> 2
console.log(duplicateCount("Indivisibility"));// ==> 1
console.log(duplicateCount("Indivisibilities")); // ==> 2

*/

// Assume `#` is like a backspace in a string. This means that the string `a#bc#d` is actually `bd`. 

/* console.log(backSpace('a#bc#d') === 'bd');
console.log(backSpace('abc#d##c') === 'ac');
console.log(backSpace('abc####d##c#') === '');
 */


/*

Input:

Output:

Rules:
- only working with alphabetic lowercase letter and hastages as backspaces
- a hashtad deletes a letter 


DS:
array

algo:
given a string
split the seperate into an array
look through the array and assess each character
  if the character is a hashtag 
    we will delete the next last letter (helper)
    replace the current hastag with a ""
return the array joined back together


we will delete the next last letter (helper)
  given an array, index
    iterate backward thorugh the array at the given index until 0
      if the element is a letter
        replace that letter with a empty string
    return the new array


'a#bc#d'
*/

function backSpace(str) {
  let strArr = str.split('');
  let strLength = strArr.length;
  for (let index = 0; index < strLength; index += 1) {
    let currentElement = strArr[index];
    if (currentElement === "#") {
      strArr = deleteLetter(strArr, index - 1);
      strArr[index] = "";
    }
  }
  return strArr.join('');
} 

function deleteLetter(arr, number) {
  for (let index = number; index >= 0; index -= 1) {
    if (isLetter(arr[index])) {
      arr[index] = '';
      break;
    }
  }
  return arr;
}

function isLetter(char) {
  return char.toLowerCase() >= "a" && char.toLowerCase() <= "z";
}



console.log(backSpace('abc#d##c') === 'ac');
console.log(backSpace('abc####d##c#') === '');
console.log(backSpace('a#bc#d') === 'bd');




function backSpace(string) {
  while (string.includes('#')) {
    let stringArray = string.split('');
    if (stringArray[0] === '#') {
      stringArray.splice(0,1);
      string = stringArray.join('');
      continue;
    }
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === '#') {
        stringArray.splice(i-1,2);
        break;
      }
    }
    string = stringArray.join('');
  }

/*
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :

an array [t, k] (in Ruby and JavaScript)

Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

  console.log(deepEqual("ababab")); // ["ab", 3]
  console.log(deepEqual("abababab")); // ["ab", 4]
  console.log(deepEqual("abcde")); // ["abcde", 1]
*/

/*

input: a string of lowercase letters
output: an array with t (min substring) and k (the number of times it takes to repeat the substring to create the original string passed

Rules:
- t = smallest substring that can be repeated to find entire substring
- s is the entire string
- k is the number of times it take to repeat t to get s

- input string will be lowercase letters
- string will have at least one letters

DS:
array

algo:
given string
find all of the substrings
  create subArr
  iterate through the string using index
    create a substring from 0 to index + 1 and add to the subArr
filter out the subs that do cannot be repeated to build string
  iterate through the subArr
    check and see if it can be repeated to build S
select the smallest string and find the amount of times it takes to build S
  sort to find the smallest substring
  to find number of repitions divide orignal string length by string length of smallest subArr

  return [substring, number of repetitions]
  

helper to find repeat subs
given our substring and the orignal substring
 loop from index = 1 to the original string length
  if the substring repeated index number of times equals our substring
    return true
return false
*/

function deepEqual(str) {
  let subArr = [];
  for (let index = 0; index < str.length; index += 1) {
    let substring = str.slice(0, index + 1);
    subArr.push(substring);
  }
  let filterArr = subArr.filter(element => doesRepeat(str, element));
  filterArr.sort((a, b) => a.length - b.length);
  let smallestSub = filterArr[0];
  let repitions = str.length / smallestSub.length;
  return [smallestSub, repitions];
}

function doesRepeat(orignalStr, subStr) {
  for (let index = 1; index <= orignalStr.length; index += 1) {
    if (subStr.repeat(index) === orignalStr) {
      return true;
    }
  }
  return false;
}

console.log(deepEqual("ababab"));
  console.log(deepEqual("abababab")); // ["ab", 4]
  console.log(deepEqual("abcde")); // ["abcde", 1]


//Gianni
function deepEqual(inputStr) {
  let substrings = [];
  for (let start = 0; start < inputStr.length; start++) {
    for (let end = start + 1; end <= inputStr.length; end++) {
      substrings.push(inputStr.slice(start, end));
    }
  }
  substrings = substrings.sort((a, b) => a.length - b.length);
  for (let index = 0; index < substrings.length; index++) {
    let length = substrings[index].length;
    let repetitionCount = 1;
    while (length * repetitionCount <= inputStr.length) {
      if (substrings[index].repeat(repetitionCount) === inputStr) {
        return [substrings[index], repetitionCount];
      }
      repetitionCount += 1;
    }
  }
}∏
