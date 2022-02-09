/*
input

output

any rules

what its asking

// You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

// In each progression, the differences between the elements must be the same.

// Example:
// [1, 2, 3, 5, 7, 9] ==> 5
// The above has 5 progressions, seen below:
// [1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

// All array elements will be unique and the array will be sorted.

/*
UNDE


Algorithm

given a an array
declare a distance = 1
declare and init max distance = (arr[length -1] / 2)
delcare and initialize new arr = []
iterate through the potential differences of
  the numbers within the array until reaches max difference
  iterate over each integer number
    init 2nd number = currentInt + currentDifference
    init 3rd number = 2ndNumber + currentDifference
if the array includes the 2nd and 3rd number
push ([currentIndex, 2nd number, 3rd number])

Refactored Algorithm
'''
given an array
get the max distance 3 numbers can be away given the value of the last index
create a new array
interate through all of the potetial difference with iterator "difference"
  iterate through each integer in the argument array with iterator "index"
  create a number 1 * difference away from the current integer
  create a number 2 * differences away from the current integer
  if the argument array includes both number 1 and number 2
  create an array that has the current index integer at index 0,
  number2 at index 1, and number 3 at index 2.
  add that array to the new array created
return the newArray legnth
'''
Thanks Eeveryone for the discussion!

*/

function func(arr) {
  let maxDistance = (Math.floor(arr[arr.length - 1] / 2));
  let newArr = [];
  for (let idx = 1; idx <= maxDistance; idx++) {
    for (let index = 0; index < arr.length; index++) {
      let number2 = arr[index] + idx;
      let number3 = number2 + idx;
      if (arr.includes(number2) && arr.includes(number2)) {
        console.log(arr.includes(number2));
        console.log(arr.includes(number3));
        newArr.push([arr[index], number2, number3]);
      }
    }
  }
  return newArr;
}

console.log(func([1, 2, 3, 5, 7, 9]));