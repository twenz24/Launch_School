/*
____________________________________
Problem

given a minute based format integet return the time of day.

Input: integer
Output: string of the time of day
Explicit Rules: 24 hr format
cant use date class methods.

Implicit Rules:
Questions:

____________________________________
Examples/test Cases

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
____________________________________
Data Structures, Algo

given a number integer
declare minutes in a day = 60*24
determine whether that number is pos or neg
let hours = ""
let number = ""
if pos;
hours = Math.floor(number / 60)
minutes = number % 60

if neg
let time of day = minInDay + number
hours = Math.floor(timeOfDay / 60)
minutes = timeOfDay % 60

return time of day
____________________________________
Code
*/
function timeOfDay(number) {
  const minInDay = 24 * 60;
  let currentDayMinutes = number % minInDay;
  let hours;
  let minutes;
  if (number >= 0) {
    hours = Math.floor(currentDayMinutes / 60);
    minutes = currentDayMinutes % 60;
  } else {
    let timeOfDay = minInDay + currentDayMinutes;
    hours = Math.floor(timeOfDay / 60);
    minutes = timeOfDay % 60;
  }
  return `${timeFormat(hours)}:${timeFormat(minutes)}`;
}

function timeFormat(number) {
  let strNumber = String(number);
  if (strNumber.length > 1) {
    return strNumber;
  } else {
    return "0" + strNumber;
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");