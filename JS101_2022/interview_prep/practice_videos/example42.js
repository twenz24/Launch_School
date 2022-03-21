/*


*/

// eslint-disable-next-line max-lines-per-function
function commonChars(strings) {
  let returnArr = [];
  let nestedArr = strings.map(element => {
    return element.split('');
  });
  nestedArr.sort((a, b) => a.length - b.length);

  for (let middle = 1; middle < nestedArr.length; middle += 1) {
    for (let outer = 0; outer < nestedArr[0].length; outer += 1) {
      for (let inner = 0; inner < nestedArr[middle].length; inner += 1) {
        console.log(nestedArr[middle][inner]);
        if (nestedArr[0][outer] === nestedArr[middle][inner]) {
          returnArr.push(nestedArr[0][outer]);
          nestedArr[middle].splice(inner, 1, "");
        }
      }
    }
  }
  return returnArr;
}

console.log(commonChars(['bella', 'label', 'roller']));