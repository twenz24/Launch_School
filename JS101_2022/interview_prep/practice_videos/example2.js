/*

input: two string
output: boolean based off of if the letters in string 1 can be put together
  to make string 2


*/

function scramble(str1, str2) {
  let str2Arr = str2.split('').sort();
  let sortedString1 = str1.split('').sort().join('');
  let reString = '\\w*';
  str2Arr.forEach(element => {
    reString += `${element}\\w*`;
  });
  let regex = new RegExp(reString);
  return regex.test(sortedString1);
}

console.log(scramble('javaass', 'jjss'));
console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('javaass', 'jjss'));
console.log(scramble('scriptjava', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));