function multiplyList(arr1, arr2) {
  let multiplesArr = [];
  for (let index = 0; index < arr1.length; index++) {
    multiplesArr[index] = (arr1[index] * arr2[index]);
  }
  console.log(multiplesArr);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]