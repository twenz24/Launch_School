let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(obj) {
  let values = Object.values(obj);
  let newObj = {};
  for (let iterator = 0; iterator < values.length; iterator += 1) {
    if (values[iterator] === 'Fruit') {
      let newKey = Object.keys(produce)[iterator];
      let newValue = Object.values(produce)[iterator];
      newObj[newKey] = newValue;
    }
  }
  console.log(newObj);
}
selectFruit(produce);

function multiplyNumbers(numbers, multiplier) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    numbers[counter] = currentNum * multiplier;

    counter += 1;
  }

  return numbers;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
multiplyNumbers(myNumbers, 5);
console.log(myNumbers);

function doubleOddIndeces(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

console.log(doubleOddIndeces(myNumbers));