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

*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let orderArr = arr.map(arr => {
  return arr.sort((a, b) => {
    if (typeof a === 'number') {
      return a - b;
    }
    return ;
  });
});

console.log(orderArr);
