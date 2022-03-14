/*
____________________________________
Problem

Input: number
Output: value at the place of that number in a fib series

Rules:

fibonaccie series rules

Questions:

____________________________________
Examples/test Cases
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

____________________________________
Data Structures, Algo

given a place value
create a priorValue variable initalized to 1
create a twoPriorValue variable initialized to 1
starting at index 2 iterate through until the index reaches the number passed
  initialize newValue variable
  add the priorValue to twoPriorValue and assign it to the newValue
  reassign the twopriot to priorValue
  assign prior value to new Value
return priorValue


____________________________________
Code
*/
function fibonacci(num) {
  let priorValue = 1;
  let twoPriorValue = 1;
  let value = 0;
  for (let index = 2; index < num; index += 1) {
    value = priorValue + twoPriorValue;
    twoPriorValue = priorValue;
    priorValue = value;
  }
  return value;
}

console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));