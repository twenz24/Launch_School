function stringToInteger(string) {
  let tensObject = {
    1 : 1,
    2 : 10,
    3 : 100,
    4 : 1000,
    5 : 10000,
    6 : 100000,
    7 : 1000000,
    8 : 10000000
  };
  let placeValue = string.length;
  let numberValue = 0;
  for (let index = 0; index < placeValue; index++) {
    numberValue += (tensObject[placeValue - index] * string[index]);
  }
  return numberValue;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true