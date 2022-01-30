function square(num1) {
  return multiply(num1, num1);
}

function multiply(num1, num2) {
  return num1 * num2;
}


console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
