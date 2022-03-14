/*
____________________________________
Problem

Input: a number place representing a fib number
Output: the value at the number place

Rules:

Recrusion
- calls itself at least once
- has an edining condition
- results of the recursion are used in each step


Questions:


____________________________________
Examples/test Cases

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21

We want to add n to n-1
____________________________________
Data Structures, Algo

given a number
if the number is less than 3 then return 1

otherwise if the number is equal to n then

return the the function at n + function
____________________________________
Code
*/

function fibonacci(number) {
  if (number < 3) {
    return 1;
  }
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(40));