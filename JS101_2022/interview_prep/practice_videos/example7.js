/*

input array
output the index where by splitting the array at the index the sums of both spliit arrays equal each other

algo
given an array
iterate through the array
returnINdex = -1;
create a left arr = to index starting at 0 to the current index
create a right arr = to index starting at the current index

if sum of the elements within the right === left
  assign returnIndex to the current index

  return current index

*/

function findEvenIndex(arr) {
  let returnIndex = -1;
  arr.forEach((_, index) => {
    let leftArr = arr.slice(0, index).reduce((sum, current) => sum + current, 0);
    let rightArr = arr.slice(index + 1).reduce((sum, current) => sum + current, 0);

    if (leftArr === rightArr) {
      returnIndex = index;
    }
  });
  return returnIndex;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2 ,3 ,4 ,5 ,6]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]));