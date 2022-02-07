/*
____________________________________
Problem

give the string of time in 24hr format
give the number of minutes before or after midnight

Input: string
Output: number of minutes
Explicit Rules:
2 functions one minutes before midnight
one after midnight
Implicit Rules:
Questions:


____________________________________
Examples/test Cases

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
____________________________________
Data Structures, Algo
given a string
let minutes of day = 0
convert string hours to minutes
convet string minutes to minutes
add them up and return
____________________________________
Code
*/

function beforeMidnight(string) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  let minOfTheDay = 0;
  let minInADay = MINUTES_IN_HOUR * HOURS_IN_DAY;
  let hours = Number(string.slice(0, 2));
  let minutes =  Number(string.slice(3));

  if (hours !== 24 && (hours + minutes) !== 0) {
    let totalMinutesPassed = (hours * MINUTES_IN_HOUR) + minutes;
    minOfTheDay = minInADay - totalMinutesPassed;
  }
  return minOfTheDay;
}

function afterMidnight(string) {
  const MINUTES_IN_HOUR = 60;
  let minOfTheDay = 0;
  let hours = Number(string.slice(0, 2));
  let minutes =  Number(string.slice(3));

  if (hours !== 24) {
    minOfTheDay = (hours * MINUTES_IN_HOUR) + minutes;
  }
  return minOfTheDay;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);