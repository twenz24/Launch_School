/*
____________________________________
Problem

take an array that includes only positive integers as arguments and return
the average of the numbers

Input: arr
Output: number average
Explicit Rules: average should be rounded down

Implicit Rules:
Questions:
what does rounding down to the integer component mean?

____________________________________
Examples/test Cases

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40
____________________________________
Data Structures, Algo
take an array
declare a count variable = 0;
iterate through all of the num in arr, adding to count each time
return count / legnth of arr, wrapped in the math.ceil static function
____________________________________
Code
*/
function average(arr) {
  let count = 0;
  arr.forEach(number => {
    count += number;
  });
  let average = Math.floor(count / arr.length);
  return average;
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40