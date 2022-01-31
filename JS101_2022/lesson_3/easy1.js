// Question 1
let numbers = [1, 2, 3];
numbers[6] = 5; // => No, [1, 2, 3, <3 empty items>, 5]

// Bonus
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // => undefined

// Question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//My answer
function includesExclamation(string) {
  return string[string.length - 1] === '!';
}
//Launch School answer
str1.endsWith("!"); // true
str2.endsWith("!"); // false

//Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//My answer
Object.keys(ages).includes('Spot');

//LS Answer
ages.hasOwnProperty("Spot");

//Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";

//My Answer
let newString = munstersDescription[0].toUpperCase() + munstersDescription.slice(1, (munstersDescription.length - 1)).toLowerCase();

//Question 5
console.log(false == '0');// => true
console.log(false === '0');// => false

//Question 6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
//My Answer
Object.assign(ages, additionalAges);

//Question 7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

//My Answer
str1.includes("Dino");
str2.includes("Dino");

// Question 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

//My Answer
flintstones.push("Dino");

//Question 9
//My Answer
flintstones.push("Dino", "Hoppy");

//Question 10
//My Answer
let advice = "Few things in life are as important as house training your pet dinosaur.";

//My Answer
advice.slice(0, advice.indexOf('house'));