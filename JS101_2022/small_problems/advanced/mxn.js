/*
____________________________________
Problem

transpose the given m x n matrix


Input:
Output:

Rules:
transpose in this taking the first element of each array and placing it into a new array

Questions:

do all nested arrays have the same length?

____________________________________
Examples/test Cases


const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

____________________________________
Data Structures, Algo

create a new array of the given arrya


____________________________________
Code
*/

/*

Tri-Angles
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Examples:

Copy Code
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"


Lettercase Percentage Ratio
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Examples:

Copy Code
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

Word to Digit
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Example:

Copy Code
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."


The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

console.log(alphabetized("The Holy Bible")) // "BbeehHilloTy"
console.log(alphabetized("This is a great song!")) // "aaegghiinorssstT"

*/

/*
You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of 
    occurences for each corresponding letter in the alphabet.

Example:                   '00000000000000000000000000`
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
   ^    ^   ^  ^  ^         ^^^  ^                   ^
  [4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
 ^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

console.log(accum('ABSCEDYS2382') === '00000000000000000000000000`);
console.log(accum('aaazyO253b') === '31000000000000000000000011`);
console.log(accum('ABSCEDYS2382') === '00000000000000000000000000`);
console.log(accum('%7cdeHPzzz') === '00111000000000000000000003`);
console.log(accum('') === '00000000000000000000000000`);



Collect|
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


//CodeWars

You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

Examples
console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
Should return: 11 (the only odd number)

console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));
Should return: 160 (the only even number)

*/

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expanded_form(12); # Should return '10 + 2'
expanded_form(42); # Should return '40 + 2'
expanded_form(70304); # Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

/*

Rules:
- all numbers will be whole numbers
- seperate the number given into its respective number position

Input: Number greater than 0
Output: string showing the addition statement to get that Number

data structure:
array

algo:
given a number
create returnValue
get the numbers that add up to given number
  assess the numbers place that the given number has
  create numbersPlace start with 10 to the numbers place - 1
  iterate through the number numberplace amount of times to get even divsors until numbersPlace = 1
    create a multiplier variable set to dividing our number by the numbersPlace rounded down answer
    create a addNumber set to numbersPlace variable multplied by the multiplier variable
    add the addNumber to the return returnValue
    numbersPlace by 10
    subtract addNumber from the given number

return those given numbers in a string addition expression
  join our array together with ' + '


function expanded_form(number) {
  let returnValue = [];
  let numberOfDigits = String(number).length;
  let numbersPlace = 10 ** (numberOfDigits - 1);
  while (numbersPlace >= 1) {
    let multiplier = Math.floor(number / numbersPlace);
    let addNumber = numbersPlace * multiplier;
    if (addNumber > 0) {
    returnValue.push(addNumber);
    }
    number -= addNumber;
    numbersPlace /= 10
  }
  return returnValue.join(' + ');
}

expanded_form(12); // Should return '10 + 2'
expanded_form(42); // Should return '40 + 2'
expanded_form(70304); //Should return '70000 + 300 + 4'

function expanded_form(inputNum) {
  let digits = String(inputNum).split("");
  let count = 0;
  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index] = digits[index] + '0'.repeat(count);
    count++; // count += 1
  }
  digits = digits.filter((str) => !(str[0] === '0'))
  return digits.join(" + ");
}

console.log(expanded_form(12) == '10 + 2');
console.log(expanded_form(42) == '40 + 2');
console.log(expanded_form(70304) == '70000 + 300 + 4');

*/

// Write a function that, given a string of text (possibly with punctuation and line-breaks),
//returns an array of the top 3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned,
// or an empty array if a text contains no words.

// Examples:
console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"]
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")); // => ["e", "ddd", "aa"]
console.log(topThreeWords("  //wont won't won't")); // => ["won't", "wont"]
console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []

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
/*
function topThreeWords(string) {
  let regEx = new RegExp('[^a-z]', g);
  let strArr = string.split(regEx);
  console.log(strArr);
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.")); //=> ["a", "of", "on"] */
/* 
function split(inputStr) {
  let resultArr = [];
  let currentStr = "";
  for (let index = 0; index < inputStr.length; index++) {
    if ()
  }
} 

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 )2
300, which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^00 
0
  to be 111.

You may assume that the input will always be valid.

Examples
lastDigit("4", "1")            // returns 4
lastDigit("4", "2")            // returns 6
lastDigit("9", "7")            // returns 9
lastDigit("10","10000000000")  // returns 0

Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

describe("Basic tests", function(){
solve("1341"),7);
solve("1357"), 10);
solve("13471"),12);
solve("134721"),13);
solve("1347231"),20);
solve("13472315"),28);
});


// // There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// // input
// // customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// // n: a positive integer, the number of checkout tills (checkout cashiers).
// // output
// // The function should return an integer, the total time required.

// // Important
// // Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// // Examples
// // queueTime([5,3,4], 1)
// // // should return 12
// // // because when there is 1 till, the total time is just the sum of the times

// // queueTime([10,2,3,3], 2)
// // // should return 10
// // // because here n=2 and the 2nd, 3rd, and 4th people in the
// // // queue finish before the 1st person has finished.

// // queueTime([2,3,10], 2)
// // // should return 12
// // Clarifications
// // There is only ONE queue serving many tills, and
// // The order of the queue NEVER changes, and
// // The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
// // N.B. You should assume that all the test input will be valid, as specified above.

/* console.log(queueTime([], 1));  // , 0);
console.log(queueTime([1,2,3,4], 1));  // , 10);
console.log(queueTime([2,2,3,3,4,4], 2));  // , 9);
console.log(queueTime([1,2,3,4,5], 100));  // , 5);
console.log(queueTime([29,9,42,40,46,7,13,48,2,33,47,1,31,8,44,38,30,20,1], 2));  // , 247); */

/*

Rules:
- There is only one queue of customers for multiple tills to serve
- order of queue is important
- customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
- n is going to be positive integer of tills available

input: customers (array), number of tills (n)
output: the total number of time it takes to process all customers

high level process:
if the array is empty the return will be 0

store our customers and change customers based on time
console.log(queueTime([2,2,5,4,13,8], 4));

        round1      round 2      round 3

queue1: 2, 5, 8

queue2: 2, 4, 13

DS: nestedArr


algo:
given our array of customers, number of tills
create the tills available
create a tillsArr
 loop and create an array based on how many tills there are
  index to given n
    push a newArr to the tills Arr
process the customers based on order and time
  iterate through our customers
    placing each customer with the shortest till wait
      - shortest till wait is the sum of all customers within the till
check to see longest till
  sort the array from highest sum of till to lowest
  take the highest
and return the longest till time
*/
/*
function queueTime(array, tills) {
  let tillsArr = [];
  for (let index = 0; index < tills; index += 1) {
    tillsArr.push([]);
  }
  array.forEach(customer => {
    tillsArr.sort((a, b) => {
      let aSum = a.reduce((sum, current) => sum + current, 0);
      let bSum = b.reduce((sum, current) => sum + current, 0);
      return aSum - bSum;
    });
    tillsArr[0].push(customer);
  });
  tillsArr.sort((a, b) => {
    let aSum = a.reduce((sum, current) => sum + current, 0);
    let bSum = b.reduce((sum, current) => sum + current, 0);
    return bSum - aSum;
  });
  return tillsArr[0].reduce((sum, current) => sum + current, 0);
}
console.log(queueTime([2,2,5,3,9,4], 2));  // , 14);
console.log(queueTime([], 1));  // , 0);
console.log(queueTime([1,2,3,4], 1));  // , 10);
console.log(queueTime([2,2,3,3,4,4], 2));  // , 9);
console.log(queueTime([1,2,3,4,5], 100));  // , 5);
console.log(queueTime([29,9,42,40,46,7,13,48,2,33,47,1,31,8,44,38,30,20,1], 2));  // , 247);

function queueTime(customerArr, tillCount) {
  let queue = customerArr.slice();
  let tills = [];
  let count = 0;
  while (count < tillCount && queue.length !== 0) {
    tills.push(queue.shift())
    count++;
  }
  let checkoutTime = 0;
  while (queue.length !== 0 || !isTillEmpty(tills)) {
    for (let cashier = 0; cashier < tills.length; cashier++) {
      if (tills[cashier] === 0 && queue.length !== 0) {
          tills[cashier] = queue.shift();
      }
      if (tills[cashier] !== 0) {
        tills[cashier] -= 1;
      }
    }
    checkoutTime += 1;
  }
  return checkoutTime;
}

function isTillEmpty(inputArr) {
  return inputArr.every((element) => element === 0);
}

console.log(queueTime([], 1));  // , 0);
console.log(queueTime([1,2,3,4], 1));  // , 10);
console.log(queueTime([2,2,3,3,4,4], 2));  // , 9);
console.log(queueTime([1,2,3,4,5], 100));  // , 5);
console.log(queueTime([29,9,42,40,46,7,13,48,2,33,47,1,31,8,44,38,30,20,1], 2));  // , 247);

/*

Problem:

Input: Expected input is a string, but could be otherwise
Output: the string with letter that exceed two consecutive reptitions in brackets

Rules:
- if the input is not a string
  return "Please enter a valid string"
- only recieve  alphetucal  characters
- empty strings return ''

DS::

- array


algo:
given a string if the characters are not a string
  return enter a valid string
check all of the letters within the string
  create a returnArr
  split the string up into char
  currentStr = string[0];
  iterate through all of the characters
    seperate all duplicates and add the duplicates to the returnArr as a string
     if the char that is the same as the previous
      add to currentStr
      continue to the next iteration
    push the currentStr to the returnArr
    reassign currentStr to the currentLetter

  returnArr iterate thrgouh
    transforming the elements if theyy are greater than 2 length
      return first two index in the element then add brackets around the rest of the index

      retrun the returnArr added together

    
find the letters that have more than 2 duplicates consecutively
take the duplicates that occur after the second and add brackets to them
return the new String with the brackets
*/
/*
function stringParse(string) {
  if (typeof string !== "string") {
    return 'Please enter a valid string';
  }
  let returnArr = [];
  let currentStr = string[0];
  for (let index = 1; index < string.length; index += 1) {
    let currentIndex = string[index];
    if (currentIndex === currentStr[0]) {
      currentStr += currentIndex;
      if (index === string.length - 1) {
        returnArr.push(currentStr);
      }
      continue;
    }
    returnArr.push(currentStr);
    currentStr = currentIndex;

    if (index === string.length - 1) {
      returnArr.push(currentStr);
    }
  }
  let transformArr = returnArr.map(element => {
    if (element.length > 2) {
      return `${element.substring(0, 2)}[${element.substring(2)}]`;
    }
    return element;
  });
  return transformArr.join('');
}


console.log(stringParse("aaaabbcdefffffffg") === "aa[aa]bbcdeff[fffff]g");
console.log(stringParse("boopdedoop") === "boopdedoop");
console.log(stringParse("helloookat") === "helloo[o]kat");
console.log(stringParse('ggbbbpppp'));
*/

