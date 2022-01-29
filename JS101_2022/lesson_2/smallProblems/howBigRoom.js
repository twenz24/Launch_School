let readline = require("readline-sync");
const SQUARE_METER_SPECS = 10.7639;

console.log('Enter the length of the room in meters: ');
let lengthOfRoom = Number(readline.question());

console.log('Enter the width of the room in meters: ');
let widthOfRoom = Number(readline.question());

let areaSquareMeters =
    (lengthOfRoom * widthOfRoom).toFixed(2);

let areaSquareFeet =
    (lengthOfRoom * widthOfRoom * SQUARE_METER_SPECS).toFixed(2);

console.log(`The area of the room is ${areaSquareMeters} square meters (${areaSquareFeet} square feet).`);