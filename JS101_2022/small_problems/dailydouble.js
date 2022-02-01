

function crunch(str) {
  let strArr = str.split('');
  let singleCharArr = [];
  for (let index = 0; index < strArr.length; index++) {
    if (index === 0) {
      singleCharArr[index] = strArr[index];
    } else if (strArr[index] !== strArr[index - 1]) {
      singleCharArr[index] = strArr[index];
    }
  }
  return singleCharArr.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""