/*

1) [1, 2, 3]

2) [undefined, undefined, undefined]

3) [1, 4, 9]

4) 11

5) callback return value:
- 2, 4, ,6

every return value is true

6) [1, 1, 1, 1, 1]

7) [undefined, 'bear']

8)


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
function objectArr (arr) {
  let flintstonesObj = {};
  arr.forEach((name, index) => {
    flintstonesObj[name] = index;
  });
  return flintstonesObj;
}

console.log(objectArr(flintstones));

9)

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArr = Object.values(ages);
let totalAge = 0;
agesArr.forEach(age => {
  totalAge += age;
});

console.log(totalAge);

10)


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

l
let agesArr = Object.values(ages);
Math.min(...agesArr);

11)


*/

let statement = "The Flintstones Rock";
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);