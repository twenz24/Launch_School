/*
if the human user has 2 of the 3 squares to win the game, select the 3rd square
  we want to go through the board and see what positions the player has marked
    return true if two out of the 3 winning psotiions for a
    given set are marked by the human
  
if not pick random
*/
let a = [["a" , 1],["b" , 2], ["c" , 3]];

let b = a.map(card => card[1]);

console.log(b);