function xor(arg1, arg2) {
  let truthyValue = 0;
  if (arg1) {
    truthyValue++;
  }
  if (arg2) {
    truthyValue++;
  }
  return truthyValue === 1;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);