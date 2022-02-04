/*
____________________________________
Problem
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01.
So, the years 1901 - 2000 comprise the 20th century.

Input: number
Output: string of the century

Explicit Rules:1901 -2000 are representative of a century


Implicit Rules:

Questions:


____________________________________
Examples/test Cases


____________________________________
Data Structures, Algo
given a number as input
determine what century the year is
  - divide the number by 100
  -since 1901-2000 is the 20th century we can round up anything greater than
  the whole integer
determine what "st, rd, th" should be used
  - create an obj that houses all appropriate "st, rd, th" based
  on the single digits place of the century
  - based on the century, index an obj to find what "st, rd, th"
  is appropriate to use
concatenate and return the result

Code
*/
function century(number) {
  let centuryEndings = {
    0 : "th", 1 : "st",
    2 : "nd", 3 : "rd",
    4 : "th",
    5 : "th",
    6 : "th",
    7 : "th",
    8 : "th",
    9 : "th"
  };
  let century = String(Math.ceil((number / 100)));
  if ((century.length >= 2) && (century[century.length - 2] === '1')) {
    century += "th";
  } else {
    century += centuryEndings[century % 10];
  }
  console.log(century);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"