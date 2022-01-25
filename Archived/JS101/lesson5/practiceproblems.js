/*
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1["first"][2][0] = 4;
console.log(obj1);

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2["a"]["a"][2] = 4;
console.log(obj2);

//Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let arr = Object.entries(munsters);
let maleArr = arr.filter(element => element[1].gender === 'male');
let sumOfArr = maleArr.map(element => element[1].age).reduce((a, b) => a + b);
console.log(sumOfArr);


let munsterArr = Object.entries(munsters);
console.log(munsterArr);

munsterArr.forEach(element => {
  let age = element[1].age;
  let gender = element[1].gender;
  console.log(`${element[0]} is a ${age}-year-old ${gender}.`);
});
let a = 2;
let b = [5, 8];
let arr = [a, b]; //[2, [5, 8]]

arr[0] += 2; //[4, [5, 8]]
arr[1][0] -= a; //[4, [1, 8]]

//Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.entries(obj).forEach(element => {
  let newArr = element[1];
  let lettersArr = newArr.map(element => element.split(""));
  let compArr = lettersArr.map(element2 => element2);
  console.log(compArr);
});

//Problem 9
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderedArr = arr.map(element => {
  if (typeof (element[0]) === 'string') {
    return element.sort();
  } else {
    return element.sort((a, b) => a - b);
  }
});

console.log(orderedArr);

//Problem 10

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});


//Problem 11
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let newArr = arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

console.log(newArr);


let newArr = arr.slice().map(element => {
  return Object.entries(element).map(element => {
    let key = element[0];
    let value = element[1] + 1;
    let obj = {};
    obj[key] = value;
    return obj;
  });
});


//Problem 12
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let hello = arr.map(element => {
  return element.filter(element => element % 3 === 0);
});

console.log(hello);


//Problem 13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.sort((a, b) => {
  return a.reduce((a, b) => {
    if (b % 2 === 1) {
      return a + b;
    }
    return 0;
  }) -
    b.reduce((a, b) => {
      if (b % 2 === 1) {
        return a + b;
      }
      return 0;
    });
});

console.log(newArr);


Input: Nested Array
Output: Array order with the nested arrays sorted based off the sum of
their odd values

Algorithm
1. take array given
2. iterate over the sub-arrays
3. Access the subarrays values
4. If value is odd add it
5. compare value


//Problem 14
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});


//Problem 15
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(element => {
  return Object.values(element).every(element => {
    return element.every(num => num % 2 === 0);
  });
});

console.log(newArr);


//Problem 16
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};
arr.forEach(element => {
  obj[element[0]] = element[1];
});

console.log(obj);
*/

//Problem 17
function getUuid() {
  let abc = "abcdef";
  let uuidArr  = [];
  for (let index = 0; index < 32; index++) {
    let letterOrNumber = Math.random();
    let randomElement = "";
    if (letterOrNumber < .50) {
      randomElement = abc[Math.floor(7 * Math.random())];
    } else {
      randomElement = Math.floor(10 * Math.random());
    }
    uuidArr.push(randomElement);
  }
  let uuidString = uuidArr.join("");
  let uuid = `${uuidString.slice(0,8)}-${uuidString.slice(8,12)}-${uuidString.slice(12,16)}-${uuidString.slice(16,20)}-${uuidString.slice(20,33)}`;
  return uuid;
}

console.log(getUuid());