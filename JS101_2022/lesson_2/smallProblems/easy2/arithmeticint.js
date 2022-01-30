let readline = require('readline-sync');

console.log('Enter the first number: ');
let number1 = readline.question();

console.log('Enter the second number: ');
let number2 = readline.question();

console.log(`==> ${number1} + ${number2} = ${Number(number1) + Number(number2)}`);
console.log(`==> ${number1} - ${number2} = ${Number(number1) - Number(number2)}`);
console.log(`==> ${number1} * ${number2} = ${Number(number1) * Number(number2)}`);
console.log(`==> ${number1} / ${number2} = ${Math.floor(Number(number1) / Number(number2))}`);
console.log(`==> ${number1} % ${number2} = ${Number(number1) % Number(number2)}`);
console.log(`==> ${number1} ** ${number2} = ${Number(number1) ** Number(number2)}`);