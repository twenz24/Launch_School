/*

#1
// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

transformedNumbers; // => [ 1, 4, 9, 16, 25 ]

Description
On line five we declare and intialize the global variable "numbers" to the
array object [1, 2, 3, 4, 5]. Additionally on line 6, we declare and intialize
the global transformedNumbers to an empty array. on line 8 we use a for 
loop to iterate over the numbers array adding 1 to the index for each iteration
stopping the when the index is = to the number array's length.
During each iteration we are declaring and initalizing the local variable
currentNumber to the element in the number array at index.
We then declare and initalize the local variable squaredNum and set it equal to
currentNum * currentNum

then we mutate transformedNumbers array by adding(pushing) the squareNum as an
element

the result is an array with all elements of the numbers array squared.

function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();


let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

Desc:
On line 1, the global variable 'greeting'  is declared and initalized to the
string
'Hello'. Then on line 3, we encounter a while loop that will run forever until
something happens to end the loop. While inside the loop we
reassign the 'greeting' variable to the string 'Hi', then break from the loop.

the code begins again on line 6 and on line 8 we log the vraiable greeting
to the console. Which will result in the console outputting 'Hi'. This code
snippet illustrates the idea of variable scoping to where global variables are
able to be accessed inside of a block or function scope.


#3
let hello = "Hello, world!";
function myFunc() {
  console.log(hello);
}

myFunc();

Desc:

On line 1, we declare and initialize the global variable `hello` to the string
`Hello World`. On the next line, we declare and initialize the function
vairable myFunc() that takes zero parameters. within the function declaration
the function will call console.log with the variable hello as an argument.
Since, the global variable 'hello' points to the string 'Hello World' that is
what will be output. The function will impicitly return undefined since no
return value is explicitly specified

the myFunc function is called on line 6 and "Hello World" is logged to the
console.

#4

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

Description:

implementation level
On line 1, we declare the function messWithVars() that takes the arguments
(one, two, three). Inside of the function scope. Within the function scope
on line 2, we take the variable one and assign it to the value that is being
referenced by the variable two.

On line 3, we take the variable two and assign it to the value that is being
referenced by the variable three.

On line 4, we take the variable two and assign it to the value that is being
referenced by the variable three.

the function declaration ends on line 5

on line 7 we declare and initialize the global variable `one` and assign it to
the array ["one"]. ON line 8, we declare and initialize the global variable
`two` to the array ['two']. and on line 9, we declare and initialize the
global variable `three` to the array ['three'].

Then on line 11, we invoke the function messWithVars passing the global
variables, `one`, `two` and `three` as arguments. Since the function declaration
referenced the locally scoped parameters `one` `two` and `three`, when we pass
the global variables one two and three, the local variables become a shadow of
the global variables. Meaning, any assignment/reassignment that is done within
the function scope will not be observed at the global level.

thus, when we log the values of the global variables on line 13, 14, 15. The
value of the one two and three global variables are ['one'], ['two'], and ['three']
respectivley

*/