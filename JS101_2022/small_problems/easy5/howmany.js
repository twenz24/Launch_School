/*
____________________________________
Problem

Write a function that counts the number of occurrences of each element in
a given array. Once counted, log each element alongside the number of
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Input: array of elemets
Output: log a count of the number of same elements in array

Explicit Rules: case sensitive,

Implicit Rules:
Questions:
how should we handle empty string?


____________________________________
Examples/test Cases

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2s

____________________________________
Data Structures, Algo

gvien an array of elements
declate countObj
go through array and log all unique element values
  use for Each for iterate through the entire array
  if countObj doesnt have the element in the array add it and assign the value 1
concurrently add up each time a unique valuue appears in OG arr
  else , eversubsequent instance of the element add 1 to the value
log the results to the console
  declare propertyArr and assign the value of obj.keys()
  declare valuesArr and assign the value of obj.values()

  iterate through the legnth of the arr and log the counts for each property

____________________________________
Code
*/
function countOccurrences(arr) {
  let countObj = {};
  arr.forEach(element => {
    if (!countObj.hasOwnProperty(element)) {
      countObj[element] = 1;
    } else {
      countObj[element] += 1;
    }
  });
  let propertyArr = Object.keys(countObj);
  let valueArr = Object.values(countObj);

  for (let index = 0; index < propertyArr.length; index++) {
    console.log(`${propertyArr[index]} => ${valueArr[index]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);