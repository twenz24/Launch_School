let arr = [ 'a', 'b', 'c' ];
let newArr = arr.filter(str => str);

arr.push('d');

console.log(arr); // logs ['a',  'b', 'c', 'd'] to console
console.log(newArr); // logs ['a', 'b', 'c'] to console