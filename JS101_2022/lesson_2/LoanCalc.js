const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to the Loan Calculator!');

prompt('Please enter your anticipated loan amount: ');
let loanAmount = Number(readline.question());
let annualPercentage;

prompt('Now please enter your Annual Percentage Rate or APR (X.XX):');
annualPercentage = Number(readline.question());

prompt('Please also enter the duration of FULL years the loan will be for:');
let fullYearDuration = Number(readline.question());

prompt(`Are there any additional months on the loan past the full ${fullYearDuration} input above? If so, please enter the number of months below. If there are no additional months, please enter 0.`);
let additionalMonthDuration = Number(readline.question());

let monthlyIntRate = annualPercentage / 12;

let totalMonthsOfLoan = (fullYearDuration * 12) + additionalMonthDuration;

let monthlyPayment = (loanAmount *
(monthlyIntRate / Math.pow((1 + monthlyIntRate), (-totalMonthsOfLoan))));

let monthlyPaymentDisplayed = monthlyPayment.toFixed(2);

prompt(`Your monthly payment on your ${fullYearDuration} year, ${additionalMonthDuration} month loan is $${monthlyPaymentDisplayed}!`);
