/*
____________________________________
Problem

Input: a year
Output: how many friday the 13ths there are in that year

Rules:

friday the 13th happens on friday the 13th

Questions:

____________________________________
Examples/test Cases
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

____________________________________
Data Structures, Algo
given a year

//// Get Start Day
given a number
let year = 1752
declare a variable startDay of year (1 Monday - 7 Sunday)
decalre a const variable that is 1 representing the shift of the days of the
  week year to year
until we are at the correct year
  if year is a leap year
    add 2 to startDay
    add 1 to the year
    coninue
  add 1 to the startDay
  add 1 to the year
return startDay


declare an object that houses the number of days within a month
iterate thoough the object value
  adding initially 13 to the startDay
  checking if that day is friday
    if so add 1 to thirteeths variable
  add the rest of the month to the startDay


____________________________________
Code
*/

function getStartDay(number) {
  const DAY_OF_WEEK_SHIFT = 365 % 7;
  const YEAR_INCREMENT = 1;
  const LEAP_YEAR_INCREMENT = 366 % 7;

  let dayOfWeek = 6;
  let year = 1752;
  while (year !== number) {
    if (leapYear(year)) {
      dayOfWeek += LEAP_YEAR_INCREMENT;
      year += YEAR_INCREMENT;
      continue;
    }
    dayOfWeek += DAY_OF_WEEK_SHIFT;
    year += YEAR_INCREMENT;
  }
  return dayOfWeek % 7;
}

function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

function fridayThe13ths(year) {
  let startDow = getStartDay(year);
  let thirteenths = 0;
  let daysInMonths = {
    January: 31, February: leapYear(year) ? 29 : 28, March: 31, April: 30,
    May: 31, June: 30, July: 31, August: 31, September: 30, October: 31,
    November: 30, December: 31
  };
  Object.values(daysInMonths).forEach(days => {
    startDow += 12;
    if (startDow % 7 === 5) {
      thirteenths += 1;
    }
    startDow += (days - 12);
  });
  return thirteenths;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));