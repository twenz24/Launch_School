//practice problem 1
/*
arr.sort((a, b) => Number(b) - Number(a));

#2
books.sort((a, b) => Number(a["published"] - Number(b["published"])))

#3
arr1[2][1][3]

arr2[1]["third"][0]

arr3[2]["third"][0][0]

obj1['b'][1]

Object.keys[obj2["third"]][0]

#4
arr1[1][1] = 4

arr2[2] = 4

obj1["first"][2][0] = 4

obj2["a"]["a"][2] = 4

#5
let totalAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalAge += munsters[member]['age'];
  }
}

console.log(totalAge);

#7
arr; // => [ 4, [ 3, 8 ] ]

#8
O]


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(element => {
  element.forEach(word => {
    word.split('').forEach(letter => {
      if ('aeiou'.includes(letter)) {
        console.log(letter);
      }
    });
  });
});

#9


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderArr = arr.map(arr => {
  if (typeof a === 'number') {
    return arr.slice().sort((a, b) => a - b);
  } else {
    return arr.slice().sort();
  }
});


console.log(orderArr);


let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderArr = arr.map(arr => {
  return arr.slice().sort((a, b) => {
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


console.log(orderArr);

#11

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let serializedArr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

deepCopiedArr.forEach(obj => {
  for (let letter in obj) {
    obj[letter] += 1;
  }
});

console.log(deepCopiedArr);
console.log(arr);

#12

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(array => {
  return array.filter(num => num % 3 === 0);
});

console.log(newArr);

#13
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];


let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.sort((a, b) => {
  return a.filter(num => {
    return num % 2 === 1;
  }).reduce((a, b) => a + b) -
  b.filter(num => {
    return num % 2 === 1;
  }).reduce((a, b) => a + b);
});

console.log(newArr);

#14

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arr = [];

for (let food in obj) {
  if (obj[food]['type'] === 'fruit') {
    arr.push(obj[food]['colors'].map(color => {
      return color[0].toUpperCase() + color.slice(1);
    }));
  } else if (obj[food]['type'] === 'vegetable') {
    arr.push(obj[food]['size'].toUpperCase());
  }
}

console.log(arr);


#15


let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

console.log(newArr);

#16

let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(arr => {
  obj[arr[0]] = arr[1];
});

console.log(obj);

#17


*/

// eslint-disable-next-line max-lines-per-function
function UUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

console.log(UUID());
