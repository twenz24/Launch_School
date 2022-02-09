function sequence(number) {
  let numberArr = [];
  for (let index = 1; index <= number; index++) {
    numberArr.push(index);
  }
  return numberArr;
}
console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));