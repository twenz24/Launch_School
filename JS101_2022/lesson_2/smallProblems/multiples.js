function multisum(number) {
  let sumArr = [];
  for (let index = 1; index <= number; index++) {
    if ((index % 3 === 0 || index % 5 === 0)) {
      sumArr.push(index);
    }
  }
  return sumArr.reduce((a, b) => a + b);
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168