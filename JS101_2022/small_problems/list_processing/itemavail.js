/*
_____
Problem

Input: a transaction ID in the form of a number, and an array that contains
transactions
Output: boolean literal, whether or not the sum of the quantities of the ID
specified is greater than 0

Rules:
if movement "in" add quantity to sum
if movement "out" subtract quantity from sum

Questions:

Is this the correct interpretation of the way movement affects the sum?
____________________________________
Examples/test Cases

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
____________________________________
Data Structures, Algo

given an ID number and transaction array
find all specified transactions within the given object
and store into a new array varaible `validTransactions`
declare a variable called `sumOfQuantity` and initialize it to 0
iterate through the entire array
  if the transactions movement property is "out"
    subtract the quantitiy property value from 'sumOfQunatity`
  else
    add the quantitiy property value from 'sumOfQunatity`

return the result of the expression `sumOfQuantity` greater than 0
____________________________________
Code
*/

function transactionsFor(id, array) {
  return array.filter(element => {
    return element['id'] === id;
  });
}

function isItemAvailable(item, array) {
  let validTransactions = transactionsFor(item, array);
  let sumOfQuantity = 0;
  validTransactions.forEach(item => {
    if (item['movement'] === 'out') {
      sumOfQuantity -= item['quantity'];
    } else {
      sumOfQuantity += item['quantity'];
    }
  });
  return (sumOfQuantity > 0);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
