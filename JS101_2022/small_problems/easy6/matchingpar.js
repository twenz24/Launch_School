/*
____________________________________
Problem
 write  a function that returns whether the parenthesis are being used correctly
 ie: there is an opening and closing bracket

Input: string
Output: boolean

Rules:

-parenthesis have to be sequentially correct
  - cant have )(


Questions:

____________________________________
Examples/test Cases
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

____________________________________
Data Structures, Algo
given a string
create two counter variables for each paranthesis
check and see if the paranthesis are correct
    iterate through the array
    if the current index is either () add that to the specific counter
    if the right paratheis counter is ever larger than left return false
return strict equality of right and left counter
____________________________________
Code
*/

function isBalanced(string) {
  let rightCounter = 0;
  let leftCounter = 0;
  for (let index = 0; index < string.length; index++) {
    if (string[index] === '(') {
      leftCounter += 1;
    } else if (string[index] === ')') {
      rightCounter += 1;
    }
    if (rightCounter > leftCounter) {
      return false;
    }
  }
  return leftCounter === rightCounter;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);