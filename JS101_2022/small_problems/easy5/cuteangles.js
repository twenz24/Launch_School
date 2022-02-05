/*
____________________________________
Problem

Write a function that takes a floating point number representing
an angle between 0 and
360 degrees and returns a string representing
that angle in degrees, minutes, and seconds.
You should use a degree symbol (˚) to represent degrees,
a single quote (') to represent minutes,
and a double quote (") to represent seconds.
There are 60 minutes in a degree, and 60 seconds in a minute.

Input: number
Output: string with dms coordinates

Explicit Rules:
There are 60 minutes in a degree, and 60 seconds in a minute.
You should use a degree symbol (˚) to represent degrees, a single quote (') to
represent minutes, and a double quote (") to represent seconds.

Implicit Rules:
Questions:

____________________________________
Examples/test Cases
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
____________________________________
Data Structures, Algo

given a number
take number and get degrees
take number and get minutes
take number and get seconds

if minutes are single digits place a 0 in front

if seconds are single digits place a 0 in front

add numbers together with formatting to get dms

if number is 360 add 0 dms as well...

log result
____________________________________
Code
*/

function dms(number) {
  let degrees = (number / 1);
  let minutes = (number % 1) * 60;
  let seconds = (minutes % 1) * 60;

  degrees = String(Math.floor(degrees));
  minutes = String(Math.floor(minutes));
  seconds = String(Math.floor(seconds));

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }

  let dmsCoordinates = `${degrees}˚${minutes}'${seconds}"`;
  if (number === 360) {
    dmsCoordinates += ` or 0˚00'00"`;
  }
  console.log(dmsCoordinates);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
