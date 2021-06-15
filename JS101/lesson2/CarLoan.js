const readline = require("readline-sync");

function prompt(input){
  console.log(`==>${input}`);
}

//Greet User
prompt("Welcome to the Loan Calculator");

//Ask user what the amount of the loan is and store it
prompt('What is your loan amount?');
let amount = Number(readline.question());

//Ask user the APR of the loan and store it
prompt("What is your annual percentage rate (APR) as a decimal (X.XX)?")
let rate = readline.question();
let mRate = Number(rate) / 12;

//Ask user for loan duration and store it
prompt("Is your loan duration in full years? (Y/N)") 
let durationResponse = readline.question();
let duration
if (durationResponse[0].toLowerCase === 'y') {
  prompt("How many years is your loan?");
  let years = readline.question();
  duration = Number(years) * 12;
} else {
  prompt("How many full years is your loan?");
  let fullYears = readline.question();
  let yearsMonths = Number(fullYears) * 12;
  prompt("How many additional months after those years is your loan?");
  let months = readline.question();
  duration = months + yearsMonths;
}

//perform calculation on inputs to determine monthly payment
let payment = amount * (mRate / (1 - Math.pow((1 + mRate), (-duration))));
let paymentCents = payment.toFixed(2);

//Output what the monthly payment is
prompt(`Your monthly payment is $${paymentCents}!`);
