function logInBox(string) {
  console.log(`+-${''.padStart(string.length, '-')}-+`);
  console.log(`| ${''.padStart(string.length)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${''.padStart(string.length)} |`);
  console.log(`+-${''.padStart(string.length, '-')}-+`);
}


logInBox('To boldly go where no one has gone before.');