function stringy(number) {
  let zeroOneString = "";
  while (zeroOneString.length < number) {
    if (zeroOneString.length % 2 === 0) {
      zeroOneString += '1';
    } else {
      zeroOneString += '0';
    }
  }
  console.log(zeroOneString);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"