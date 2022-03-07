/*
____________________________________
Problem

Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array.
Each element in the grocery list contains a fruit name and a number that
represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of
times equal to its desired quantity.

Input: a nested array of sub arrays with an item to buy and the number of
that items needed
Output: an array of the items names occuring as many times as the specified
number needed

Rules:
name of apple is repeated until it meets the number specified


Questions:
can we assume that the numbers are numbers?

____________________________________
Examples/test Cases

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
____________________________________
Data Structures, Algo

given an array
create amn empty array named fruitList
iterate through each element in the passed array
  while the index is less than or equal to the index 1 of the element
    add the fruit specified to fruitList
return fruitList

____________________________________
Code
*/

function buyFruit(array) {
  let fruitList = [];
  array.forEach(element => {
    for (let index = 1; index <= element[1]; index += 1) {
      fruitList.push(element[0]);
    }
  });
  return fruitList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));