function adjustAces(currentScoresArr) {
  while (true) {
    let score = currentScoresArr.reduce((a, b) => a + b, 0);
    if (score <= 21) break;
    else {
      let index = currentScoresArr.findIndex(card => card === 11);
      if (index === -1) break;
      currentScoresArr[index] = 1;
    }
  }
  return currentScoresArr;
}

let a = [11, 11, 11, 11, 10];
console.log(adjustAces(a));