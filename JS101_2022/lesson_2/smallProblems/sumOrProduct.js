let readline = require('readline-sync');

const options = {
  s : 'sum',
  p: 'product'
};

console.log("Please enter an integer greater than 0: ");
let number = readline.question();

while (true) {
  if (Number(number) <= 0 || (Number(number) % 1) !== 0) {
    console.log('That is not a valid input. Please enter an integer greater than 0');
    number = readline.question();
  } else {
    break;
  }
}

console.log(`Enter "${Object.keys(options)[0]}" to compute the ${options['s']}, or "${Object.keys(options)[1]}" to compute the ${options['p']}. `);
let operation = readline.question();

while (true) {
  if (operation.toLowerCase() !== 's' && operation.toLowerCase() !== 'p') {
    console.log('That is not a valid input. Please enter either "s" or "p"');
    operation = readline.question();
  } else {
    break;
  }
}

if (operation === Object.keys(options)[0]) {
  let sumOfInt = 0;
  let numberCopy = number;
  while (numberCopy > 0) {
    sumOfInt += Number(numberCopy);
    numberCopy--;
  }
  console.log(`The sum of the intergers between 1 and ${number} is ${sumOfInt}.`);
} else {
  let prodOfInt = 1;
  let numberCopy = number;
  while (numberCopy > 0) {
    prodOfInt *= Number(numberCopy);
    numberCopy--;
  }
  console.log(`The sum of the intergers between 1 and ${number} is ${prodOfInt}.`);
}

