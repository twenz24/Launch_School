//Q1
let phrase = 'The Flintstones Rock!';
for (let num = 0; num < 10; num++) {
  let newPhrase = phrase.padStart(num + phrase.length, " ");
  console.log(newPhrase);
}
//Q2
let munstersDescription = "The Munsters are creepy and spooky.";
let newMunstersDescription = "";
for (let index = 0; index <= munstersDescription.length; index++) {
  if (munstersDescription.charAt(index) ===
  munstersDescription.charAt(index).toUpperCase()) {
    newMunstersDescription += munstersDescription.charAt(index).toLowerCase();
  } else {
    newMunstersDescription += munstersDescription.charAt(index).toUpperCase();
  }
}
//Q3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}
console.log(factors(4));
