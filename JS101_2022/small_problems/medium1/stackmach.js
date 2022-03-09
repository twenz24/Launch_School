/*
____________________________________
Problem

Input: a string with commands
Output: numers and results based on the commands passed in the string

Rules:

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing
  the result in the register.
SUB : Pop a value from the stack and subtract it from the register value,
  storing the result in the register.
MULT : Pop a value from the stack and multiply it by the
  register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register
  value by the popped stack value, storing the integer result
  back in the register.
REMAINDER : Pop a value from the stack and divide the register value by
  the popped stack value, storing the integer remainder of the division
  back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.

all strings are valid programs

Questions:

assume that all commands are 1 word
Will numbers only be 0-9?

____________________________________
Examples/test Cases
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
____________________________________
Data Structures, Algo

given a string of commands as an argument
create commandArr that is assigned to all command split up
iterate through the commandArr
  based on the command perform the correct action
return nothing

commandFunc
given a string passed as a word
asses what action needs to be performed for each command

____________________________________
Code
*/

function minilang(string) {
  let stack = [];
  let register = 0;
  let commandArr = string.split(' ');
  commandArr.forEach(element => {
    if (isNumber(element)) {
      register = Number(element);
    } else {
      register = commands(element, stack, register);
    }
  });
}

// eslint-disable-next-line max-lines-per-function
function commands(string, currentStack, currentRegister) {
  switch (string) {
    case 'PUSH':
      currentStack.push(currentRegister);
      return currentRegister;
    case 'ADD':
      currentRegister += currentStack.pop();
      return currentRegister;
    case 'SUB':
      currentRegister -= currentStack.pop();
      return currentRegister;
    case 'MULT':
      currentRegister *= currentStack.pop();
      return currentRegister;
    case 'DIV':
      currentRegister = Math.floor((currentRegister / currentStack.pop()));
      return currentRegister;
    case 'REMAINDER':
      currentRegister %= currentStack.pop();
      return currentRegister;
    case 'POP':
      currentRegister = currentStack.pop();
      return currentRegister;
    case 'PRINT':
      console.log(currentRegister);
      return currentRegister;
  }
}

function isNumber(string) {
  return !isNaN(Number(string));
}
minilang('PRINT');
