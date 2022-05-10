/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.

input: two array a1, and a2
Output: array containing the substrings that are from a1 that appear in a2

Rules:
- only count a substring once, no duplicates
- only strings are elements within the array


DS:
Array

algo:
given two arrays
iterate throguh the a2
  find all substrings of a2
  iterate throguh the a1
    if the element in a1 is included as a substring in a2 and is not already in the returnArr
      push elementn to returnArr
return the return array sorted lexigraphically

findSubs(str)
create a subsArr
iterate through the string starting at outer set to 0
  iterate through the string starting at inner set to outer + 1
    create a sub set to the copy at outer, inner + 1
    push sub to subsArr
return subsArr
*/

function inArray(arr1, arr2) {
  let returnArr = [];
  for (let index = 0; index < arr1.length; index += 1) {
    let sub = arr1[index];
    for (let inner = 0; inner < arr2.length; inner += 1) {
      let innerWord = arr2[inner];
      let subArrays = findSubs(innerWord);
      console.log(innerWord);
      if (subArrays.includes(sub) && !returnArr.includes(sub)) {
        returnArr.push(sub);
      }
    }
  }
  return returnArr.sort();
}

function findSubs(str) {
  let subsArr = [];
  for (let outer = 0; outer < str.length; outer += 1) {
    for (let inner = outer + 1; inner < str.length + 1; inner += 1) {
      let sub = str.slice(outer, inner);
      subsArr.push(sub);
    }
  }
  return subsArr;
}

inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]);