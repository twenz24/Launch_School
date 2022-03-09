function swapCase(string) {
  let stringArr = string.split('');
  return stringArr.map(element => {
    return element.toLowerCase() === element ?
      element.toUpperCase() : element.toLowerCase();
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));