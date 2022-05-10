/* tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the sa
me number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1 */

/*
Input:
two numbers
Output: 1 or zero depending if the first number has triples and the second number has doubles

Rules:
- first number is true if it contains 3 of the same number consecutively
- second needs doubles
- should only be strings
- reutrn 0 if not true

algo:
given two numbers
check to see if num1 one has triples
check to see if num2 has doubles
return 1 if they both do otherwise return 0

triples/doubles
given a number
access each number in the string
create a duplicates variable set to the first number in the string
check to see if there are 3 of the same number together
  if the current number is the same as the last
    add the curent letter to duplicates
      if duplicates === 3
        return true
  else 
    assign duplicates to the currentChar
  else return false

reutrn true if so
return flse if not
*/

function tripledouble(num1, num2) {
  return triples(String(num1)) && doubles(String(num2)) ? 1 : 0;
}

function triples(number) {
  let strNum = number.split('');
  let duplicates = strNum[0];
  for (let index = 1; index < strNum.length; index += 1) {
    let currentNum = strNum[index];
    let lastNum = strNum[index - 1];
    if (currentNum === lastNum) {
      duplicates += currentNum;
      if (duplicates.length === 3) {
        return true;
      }
    } else {
      duplicates = currentNum;
    }
  }
  return false;
}

function doubles(number) {
  let strNum = number.split('');
  let duplicates = strNum[0];
  for (let index = 1; index < strNum.length; index += 1) {
    let currentNum = strNum[index];
    let lastNum = strNum[index - 1];
    if (currentNum === lastNum) {
      duplicates += currentNum;
      if (duplicates.length === 2) {
        return true;
      }
    } else {
      duplicates = currentNum;
    }
  }
  return false;
}

tripledouble(451999277, 41177722899)// == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345)// == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345);// == 0

tripledouble(666789, 12345667)// == 1 */