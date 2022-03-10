/*
____________________________________
Problem

Input: 3 numbers
Output: determination of type of triangle

Rules:

- valid triangles two shorter sides combine to be greater than the longest side
- additionally all sides myst be greater than 0

Eq all sides are equal
iso has two sides that are equal
scalene has no sides equal


Questions:


____________________________________
Examples/test Cases

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"

____________________________________
Data Structures, Algo
given 3 numbers

check to make sure that the function is value
  if not return undefined
if all three numbers are equal to each other
  return equilateral
if 2 of the threesides are equal (1 == 3 || 1 == 2  || 2 == 3)
  return isosceles
if none are equal
  scalene

____________________________________
Code
*/

function triangle(num1, num2, num3) {
  if (validTriangle(num1, num2, num3)) {
    return `invalid`;
  } else if (num1 === num2 && num1 === num3) {
    return `equilateral`;
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return `isosceles`;
  } else {
    return `scalene`;
  }
}

function validTriangle(number1, number2, number3) {
  let numArr = [number1, number2, number3].sort((a, b) => a - b);

  let sumOfSides = numArr[0] + numArr[1];
  let largestSide = numArr[2];

  // eslint-disable-next-line max-len
  return !(number1 > 0 && number2 > 0 && number3 > 0) || largestSide > sumOfSides;
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));

