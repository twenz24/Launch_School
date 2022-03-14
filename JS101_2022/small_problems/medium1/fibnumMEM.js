/*
____________________________________
Problem

Input:
Output:

Rules:

Questions:

____________________________________
Examples/test Cases

____________________________________
Data Structures, Algo

given a number
store computed value in array named storedValue
if the num passed is less than 2
 return 1
if else
return the stored value at the num index

else
return fib n-1 fib n-2

____________________________________
Code
*/
/* 
function fibonacci(number) {
  let storedArr = [1, 1];
  if (storedArr[number - 1]) {
    return storedArr[number - 1];
  } else {
    storedArr.push(fibonacci(number - 1) + fibonacci(number - 2));
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
} */

let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

console.log(fibonacci(40));