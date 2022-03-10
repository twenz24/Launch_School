/*
____________________________________
Problem

Input: 3 numbers
Output: the triangle classification based on angle numbers given

Rules:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

Valid triangles are : 
- added up to 180 degrees
- all have dgree angles above 0

Questions:

____________________________________
Examples/test Cases
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
____________________________________
Data Structures, Algo

given 3 numbers
if the numbers are invalid 
   return invalid
if the one of the numbers is 90
  return right
if one of the numbers is over 90
  return obtuse
if every number number below 90
  return true

____________________________________
Code
*/

function triangle(num1, num2, num3) {
  if (!validTriangle(num1, num2, num3)) {
    return `invalid`;
  } else if (num1 === 90 || num2 === 90 || num3 === 90) {
    return `right`;
  } else if (num1 > 90 || num2 > 90 || num3 > 90) {
    return `obtuse`;
  } else {
    return `acute`;
  }
}

function validTriangle(num1, num2, num3) {
  let sumOfAngles = [num1, num2, num3].reduce((a, b) => a + b, 0);
  return (num1 > 0 && num2 > 0 && num3 > 0) && (sumOfAngles === 180);
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 60, 90));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));

