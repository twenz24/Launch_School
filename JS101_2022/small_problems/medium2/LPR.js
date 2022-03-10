/*
____________________________________
Problem

Input: string

Output: object with certain metrics

Rules:
- percentage of characters in the string that are lowercase
= % that are uppercase
- percentage that are neither

Questions:
include all types of characters?


____________________________________
Examples/test Cases

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
____________________________________
Data Structures, Algo

given a string
declare and initialize the denominator to the length of the string
decalte and initialize an resultObj
  with the properties lowercase, uppercase neither initialize to value 0
declareing a charArr initialized to the string individual=
  characters split into an array
iterate through the charArr array
  if lowercase add 1
  if uppercase add 1
  else add 2 to neither

assign lowercase prop to lowercase value div by resultObj
assign uppercase prop to lowercase value div by resultObj
assign neither prop to lowercase value div by resultObj

return resultObj
____________________________________
Code
*/

// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {
  let denominator = string.length;
  let resultObj = {
    lowercase: 0,
    uppercase: 0,
    neither:0
  };
  string.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      resultObj[`lowercase`] += 1;
    } else if (char.match(/[A-Z]/)) {
      resultObj[`uppercase`] += 1;
    } else {
      resultObj[`neither`] += 1;
    }
  });
  resultObj[`lowercase`] = ((resultObj[`lowercase`] / denominator) * 100).toFixed(2);
  resultObj[`uppercase`] = ((resultObj[`uppercase`] / denominator) * 100).toFixed(2);
  resultObj[`neither`] = ((resultObj[`neither`] / denominator) * 100).toFixed(2);
  return resultObj;
}
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));