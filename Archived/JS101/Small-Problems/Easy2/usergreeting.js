/*
1) Problem
INput: a name from user
Output: a string greeting the user

explicit:
- you will need to get the name from the user
- if the user puts an exclamation at the end of their name. use all caps to
greet them
implicit:
- add in why are we screaming?
- input hsould be on same line as the request for input
- reponse should be on following line

question:
- can we assume that the only place an exclamation would be would be at the end


2) Examples
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

3) Data Structures
4) Algorithm

1) ask the user for their name
2) store the name in a variable
3) check to see if the name uses an exclamation at the end
  a) if yes, use caps to greet them back with string
  b) if no, just greet them normally with string
4) return greeting


5) Code
*/

const readline = require("readline-sync");

let answer = readline.question('What is your name? ');

if (answer[answer.length - 1] === '!') {
  console.log(`HELLO ${answer.slice(0, answer.length - 1).toUpperCase()}. WHY ARE WE YELLING?`);
} else {
  console.log(`Hello ${answer.slice(0, answer.length)}.`);
}