function fields(string) {
  return string.split(/[ \t,]+/);
}

console.log(fields("Pete \t 201    ,  TA"));
