//Question 1
let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length > 0) {
  numbers.pop();
}

//Question 2
// logs ==> '1, 2, 34, 5'

//Question 3
//outputs ==> 'hello there'

//Question 4
// outputs ==> [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]

// Question
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

//refactor 1
function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

// refactor 2
const isColorValid = color => (color === 'blue' || color === 'green');
