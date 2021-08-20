function arrayElementObj(arr) {
  let index = 0;
  let newObj = {};
  while (index < arr.length) {
    newObj[arr[index]] = index;
    index++;
  }
  return newObj;
}
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
console.log(arrayElementObj(flintstones));

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumAges = Object.values(ages).reduce((a, b) => a + b);
console.log(sumAges);

function addAges(arr) {
  return Object.values(arr).reduce((a, b) => a + b);
}
addAges(ages);

function minAge(arr) {
  let values = Object.values(arr);
  let min = values[0];
  values.forEach( num => {
    if (num < min) {
      min = num;
    }
  });
  return min;
}

console.log(minAge(ages));