//Question 1
//no, because JS throws random ; sometimes when they are expecting them.
//In this example, it is expecting one after the return,
// so if it does not see any return value, it will put a semi
// in place and call it a day

//Question 2
let object = { first: [1] }; // => {first: [1]}
let numArray = object["first"];// ==> [1]
numArray.push(2);// ==> [1, 2]

console.log(numArray); //  => "[1, 2]"
console.log(object);// => {first: [1, 2]}

//Objects and arrays are passed by reference in JS, so when the
//array is passed to the numArray variable, any mutation on
// that array will also result in the array inside the object object to be
// mutated as well

//Question 3
//A) 
function messWithVars(["one"], ["two"], ["three"]) {
  one = ["two"]; //(ond = ["one"], two = ["Two"], three = ["three"])
  two = ["three"]; //(one = ["two"], two = ["two"], three = ["three"])
  three = ["two"]; //(one = ["two"], two = ["three"], three = ["three"])
}

//B)

//C)

//Question 4

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length === 4) {
    while (dotSeparatedWords.length > 0 ) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    } return true
  } else {
    return false;
  }
}



