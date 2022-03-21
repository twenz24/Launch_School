function removeVowels(array) {
  let a = array.map(element => {
    return element.match(/[^aeiou]+/gi) ? element.match(/[^aeiou]+/gi).join('') : '';
  });
  console.log(a);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);