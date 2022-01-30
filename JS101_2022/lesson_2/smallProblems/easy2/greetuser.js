let readline = require('readline-sync');

console.log('What is your name?');
let name = readline.question();

if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
