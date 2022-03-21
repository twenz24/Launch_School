/*
problem : a positive integer and return the next biggest integer with the
  same digits
21 ==> -1
345 => 435
2345 => 3245

algo
given the number
create an `numberArr` variable housing the digits of the number given
create a max number the numbers in the array sorted descending
create returnValue initialized to -1
loop over the potential number adding 1 to the index each time
  if the digits in the numberArr equal the digits in the index number
    (sorting the digits of both numberArr and the array of digits at indexNumber
        to see if they are equal)
    set returnValue to index number

return returnValue

*/

function nextBiggerNum(number) {
  let numberArr = String(number).split('');
  let maxNumber = Number(numberArr.sort((a, b) => b - a).join(''));
  let returnValue = -1;

  for (let index = number + 1; index <= maxNumber; index += 1) {
    let indexArr = String(index).split('');
    if (sameDigits(numberArr, indexArr)) {
      returnValue = index;
      break;
    }
  }
  return returnValue;
}

function sameDigits(number1, number2) {
  let returnValue = true;
  number1.sort();
  number2.sort();
  for (let index = 0; index < number1.length; index += 1) {
    if (number1[index] !== number2[index]) {
      returnValue = false;
    }
  }
  return returnValue;
}


console.log(nextBiggerNum(9));
console.log(nextBiggerNum(12));
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2017));
console.log(nextBiggerNum(111));
console.log(nextBiggerNum(531));
console.log(nextBiggerNum(123456789));