//Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";

// My answer
advice.replace("important", "urgent");
advice.replace()

//Question 2

let numbers = [1, 2, 3, 4, 5];
let newNum = numbers.slice();
newNum.reverse();

numbers = [1, 2, 3, 4, 5];
let newNum2 = numbers.slice();
newNum2.sort((num1, num2) => num2 - num1);

//Question 3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);

numbers.includes(number2);

//Question 4
let famousWords = "seven years ago...";
let new1 = 'Four score and ' + famousWords;
let newer = 'Four score and '.concat(famousWords);

//Question 5
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

//Question 6
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//My Answer
let newFlintstones = [];
flintstones.forEach(name => {
  newFlintstones = newFlintstones.concat(name);
});

console.log(flintstones);
console.log(newFlintstones);

//Question 7
flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
newArr = Object.entries(flintstones).filter(pair => pair[0] === "Barney");
console.log(newArr);

//Question 8
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers); // => true
Array.isArray(table);   // => false

//Question 9
let title = "Flintstone Family Members";
let paddedString = title.padStart(Math.floor((40 - title.length) / 2) + title.length);
console.log(paddedString);

//Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;