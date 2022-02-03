/*
____________________________________
Problem
Write a function that determines the mean (average) of the three
scores passed to it, and returns the letter associated with that grade.

Input: three numbers that represent grades
Output:a letter grade as a string

Explicit Rules: arguments will be from 0-100,
90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'


Implicit Rules: grades are whole integers

Questions:
do we need to handle decimal inputs?


____________________________________
Examples/test Cases

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
____________________________________
Data Structures, Algo

decalre a function getGrade()
get the average
check to see which range the average falls into
return the letter grade
____________________________________
Code
*/

function getGrade(grade1, grade2, grade3) {
  let gradeArray = [grade1, grade2, grade3];
  let average = gradeArray.reduce((a, b) => a + b) / gradeArray.length;
  if (average >= 90) {
    console.log('A');
  } else if (average >= 80) {
    console.log('B');
  } else if (average >= 70) {
    console.log('C');
  } else if (average >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"