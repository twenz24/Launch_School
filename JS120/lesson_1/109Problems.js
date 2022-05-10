/*Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)

console.log(longest('asd')); // 'as'
console.log(longest('nab')); // 'ab'
console.log(longest('abcdeapbcdef')); // 'abcde'
console.log(longest('asdfaaaabbbbcttavvfffffdf')); // 'aaaabbbbctt'
console.log(longest('asdfbyfgiklag')); // 'fgikl'
console.log(longest('z')); // z
console.log(longest('aaaaaaaaaazabcd')); // aaaaaaaaaa
*/

/*

Problem:

take a strings and return the longest alphabetic substring of that string

input: string
Output: substring of alphabetic characters

Notes:
- if the string is one letter than return the original string
- no other characters, only alphabetic
- only lowercase
- if there are multiple of the same length then return the first

DS:
array

Algo:
given a string

get all of the susbtrings
  create a subArr
 iterate through the string starting at the outer index of 0
  iterate through the string starting at the inner index of outer + 1
    slice the characters from outer to inner + 1 and add it to subArr
  
select out the non alphabetic substrings
  check to see if the substrings are in alphabetic order (helper function) 
    iterate through the string
      if the next letter is greater than or equal to the current letter (UTF) than assign return value to true
      if not returnValue should be false

find and return the substring with the longest length
  set longestStr to ""
  iterate through our alphabeticArr
    if the current string in array is greater than the longestStr
      set longestStr to the current element within the array
  return the longestStr
*/

function longest(string) {
  if (string.length === 1) {
    return string;
  } else {
  let subArr= [];
  for (let outer = 0; outer < string.length; outer += 1) {
    for (let inner = outer + 1; inner < string.length; inner += 1) {
      let substring = string.slice(outer, inner + 1);
      subArr.push(substring);
    }
  }
let alphaArr = subArr.filter(element => {
  return isAlphabetic(element);
});
let longestStr = '';
for (let index = 0; index < alphaArr.length; index += 1) {
    let currentValue = alphaArr[index];
    if (currentValue.length > longestStr.length) {
      longestStr = currentValue;
    }
 }
 return longestStr;
}
}

function isAlphabetic(str) {
  let returnValue = false;
  for (let index = 0; index < str.length - 1; index += 1) {
    let letter = str[index];
    let nextLetter = str[index + 1];
    if (letter <= nextLetter) {
      returnValue = true;
    } else {
      return false;
    }
  }
  return returnValue;
}

console.log(longest('asd')); // 'as'
console.log(longest('nab')); // 'ab'
console.log(longest('abcdeapbcdef')); // 'abcde'
console.log(longest('asdfaaaabbbbcttavvfffffdf')); // 'aaaabbbbctt'
console.log(longest('asdfbyfgiklag')); // 'fgikl'
console.log(longest('z')); // z
console.log(longest('aaaaaaaaaazabcd')); // aaaaaaaaaaz

function isAlphabetical(inputStr) {
  return inputStr === inputStr.split("").sort().join("");
}

/*
Given a string, we'd like to know whether the vowels, consonants or both (assessed separately) are the same backwards as they are forwards. See examples at the bottom of this description.

The test should be case-insensitive, and should only assess letters, ignoring spaces, numbers and other non-letter characters ("_" "*" " " "-"). Vowels are AEIOU. The letter Y is a consonant for this exercise.

If the string doesn't have the same sequence of consonants or vowels backwards, we want to return "neither". If only the vowels are palindromic, return "vowel". If only the consonants are palindromic, return "consonant". If the vowels and the consonants in the string are palindromic, return "both".

You can assume that all test cases will contain at least one vowel and one consonant.

Enjoy!

Some examples:

"egg" would return "both", as "e" is the same backwards as it is forwards, as is "gg".

"raCe car" would also return "both" as "rccr" and "aea" are palindromes.

"wizard" would return "neither".

"pea13ce" would return "vowel" as "eae" is palindromic, but "pc" is not.

" *73_ ab" would return "both" as "a" and "b" are palindromic (according to me...)

console.log(palindrome("egg") === "both");
console.log(palindrome("raCe car") === "both");
console.log(palindrome("wizard") === "neither");
console.log(palindrome("pea13ce") === "vowel");
console.log(palindrome(" *73_ ab") === "both");
console.log(palindrome("3-B0oto b") === "both");
console.log(palindrome("_inte 4" ===, "neither");
console.log(palindrome("neither") === "vowel");
*/

/*
Problem:
checking to see if the occurence of vowels and consanents are the same when reversed within a given string

Input: string
Output: neither, both, vowel, consanant

Rules:
- case insensitiv
- assume there will be 1 vowel and 1 consanant
- aeiou are vowels

DS:
array

algo:
given a string
seperate out the vowels and consanats
  create a vowelstr
  create a consanantsStr
  iterate through our string
  if the letteer is a letter (helper function)
    if it is a vowels 
      add letter to vowel string
    if not add to consanantStr
check and see if they can be reversed (helper function)
  if the string can be reversed in lowercase and equals original
    then return true
make a determination on what the output should be (helper function)
  if both are true return both
  if vowels are true return Vowels
  if consanant are true return consanant
  else return neither
*/

function isLetter(char) {
  return char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'
}

function palindrome(str) {
  let vowels = "";
  let consanant = "";
  for (let index = 0; index < str.length; index += 1) {
    let currentChar = str[index].toLowerCase();
    if (isLetter(currentChar)) {
      if ('aeiou'.includes(currentChar)) {
        vowels += currentChar;
      } else {
        consanant += currentChar;
      }
    }
  }
  return decision(vowels, consanant);
}

function isPalindrome(str) {
  return str === str.split('').reverse().join("");
}

function decision (strV, strC) {
  if (isPalindrome(strV) && isPalindrome(strC)) {
    return "both";
  } else if (isPalindrome(strV)) {
    return "vowel";
  } else if (isPalindrome(strC)) {
    return "consonant";
  } else {
    return "neither";
  }
}
console.log(palindrome("egg") === "both");
console.log(palindrome("raCe car") === "both");
console.log(palindrome("wizard") === "neither");
console.log(palindrome("pea13ce") === "vowel");
console.log(palindrome(" *73_ ab") === "both");
console.log(palindrome("3-B0oto b") === "both");
console.log(palindrome("_inte 4") === "neither");
console.log(palindrome("neither") === "vowel");

/*
//What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// anagrams('', []) => []

*/

/*

Input: string and an array of strings
Output: an array of strings that are anagrams to the passed comp string

Rules:
- anagrams are words that include all of the same letters and have the same lengths
- only string and array of strings will be passed
- should be case insensitive
- only alphabetic characters

DS:
array

algo:
given a string and an stringArr
compare the string to the stringArr to find anagrams
  select out the anagram strings place them in a new array

helper to find anagrams
given the compString and testStr
  sort the two strings in all lowercase, and they equal each other, then they are anagrams

*/
function anagrams(str, strArr) {
  return strArr.filter(element => isAnagram(str, element));
}

function isAnagram(compStr, checkStr) {
  return compStr.toLowerCase().split('').sort().join('') === checkStr.toLowerCase().split('').sort().join('');
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada', 'aaab'])) // => ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));// => ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));// => []
console.log(anagrams('', []));// => []