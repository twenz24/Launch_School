/*
____________________________________
Problem

Input: a word and string of text
Output: the number of times the word is in the string

Rules:
word and string will always be provided
case does not matter

Questions:
Do we need to filter out non letter characters included in a word?

____________________________________
Examples/test Cases
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem
accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
sequi nesciunt.
Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
consectetur, adipisci velit,
sed quia non numquam eius modi tempora incidunt ut labore et dolore
magnam aliquam quaerat voluptatem.
Ut enim ad minima veniam, quis nostrum exercitationem
ullam corporis suscipit laboriosam, nisi ut aliquid
ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
qui in ea voluptate velit esse quam nihil
molestiae consequatur, vel illum qui dolorem eum
fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

____________________________________
Data Structures, Algo

given a word and a string
break up the string into indvidual words into an array
create occurrences variable
iterate through each word in the array
  if the word equals the current word within iteration
    add 1 to occurrences variable

    return occurences
____________________________________
Code
*/

function searchWord(word, string) {
  let occurences = 0;
  string.split(" ").forEach(element => {
    if (element.toLowerCase() === word.toLowerCase()) {
      occurences += 1;
    }
  });
  return occurences;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3