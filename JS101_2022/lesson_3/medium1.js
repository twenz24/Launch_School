//Question 1
for (let index = 0; index < 10; index++) {
  let str = 'The Flintstones Rock!';
  console.log(`${str.padStart(index + str.length)}`);
}

//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";

let munsterArr = munstersDescription.split('');
let inverseDescription = "";

munsterArr.forEach(letter => {
  if (letter === letter.toUpperCase()) {
    inverseDescription += letter.toLowerCase();
  } else {
    inverseDescription += letter.toUpperCase();
  }
});

console.log(inverseDescription);

//Question 3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

//Question 4
/*
Yes, there is a difference, and the difference is how the methods
treat the original array. Push method will mutate it, while concat will 
return a shallow copy of the array.
*/

//Question 5
// ==+ outputs 0.89999..
// ==> outputs false
// this is because Javascript uses floating point numbers for all numeric
//operations which lacks a level of precision and can yield weird results
// like this.

//Question 6
/*
Nan is a special numeric value that is supposed to represent an
operation that was supposed to return a numeric value but failed

The only way to test if a value is NaN is to use the Number.isNaN() method.
*/

//Question 7
//34

// Question 8
//Yes, because even though he used object.values(demoObject),
//the values at each index are referencing the
//same object that was in the original munsters object.
//this is because the age and gender objects were passed
// by value from the munsters array to the new array

//Question 9
/* console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
console.log(paper);
*/

//Question 10
//"no"
