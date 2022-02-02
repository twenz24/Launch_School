function triangle(number) {
  for (let index = 1; number >= index; index++) {
    console.log(`${'*'.repeat(index).padStart(number, " ")}`);
  }
}

triangle(5);
triangle(9);