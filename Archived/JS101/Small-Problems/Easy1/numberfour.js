/*
1) Problem

Input:
length and width of a desired room in meters

output:
area of the toom in square meters and square feet

Explicit:

1 meter = 10.7639 ft

Implicit:

area is evaluated to 2 decimal places

numbers recieved are whole numbers

the area formula is  l x w, lol

2) Examples/ Test Cases
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

3) Data Structures
4) Algorithm

a) We need to ask for the user to provide a length of the room in meters
b) ask for the width of the room in meters
c) take inputs and caluclate area in square meters
d) Then calculate the square feet conversion of those arguments
d) output area to the console.
5) Code
*/
const readline = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = readline.question();

console.log('Enter the width of the room in meters:');
let width = readline.question();

let areaInMeters = Number(length) * Number(width);
let areaInFeet = areaInMeters * 10.7639;

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);