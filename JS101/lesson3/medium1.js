//Q1
let phrase = 'The Flintstones Rock!';
for (let num = 0; num < 10; num++) {
  let newPhrase = phrase.padStart(num + phrase.length, " ");
  console.log(newPhrase);
}
//Q2
let munstersDescription = "The Munsters are creepy and spooky.";
let newMunstersDescription = "";
for (let index = 0; index <= munstersDescription.length; index++) {
  if (munstersDescription.charAt(index) ===
  munstersDescription.charAt(index).toUpperCase()) {
    newMunstersDescription += munstersDescription.charAt(index).toLowerCase();
  } else {
    newMunstersDescription += munstersDescription.charAt(index).toUpperCase();
  }
}
//Q3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
}
console.log(factors(4));

//Q4
/*
Push is a destructive method, or it changes the orginal object and concat is a
non-destructive and will return a new string
*/

//Q5
/*
1) will return 0.9 /// 0.899999999999
2)true // false
*/

//Q6
//False
//.isNan

//Q7
//34

//Q8
//Yes

//Q9
//paper

//Q10
//"no"

//Hard problem 3
//A
//one is one
// two is two
// three is three

//B
//one is one
//two is two
//three is three

//C
//one is two
//two is three
//three is one

//Q4


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.legnth !== 4) {
    return false;
  } else {
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }
    return true;
  }
}

