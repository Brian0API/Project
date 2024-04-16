const input = require('sync-input');

console.log("Earned amount:");
console.log("Bubblegum: " + "$202");
console.log("Toffee: " + "$118");
console.log("Ice cream: " + "$2250");
console.log("Milk chocolate: " + "$1680");
console.log("Doughnut: " + "$1075");
console.log("Pancake: " + "$80");
console.log("");

let bub = 202;
let tof = 118;
let iceC = 2250;
let milkC = 1680;
let dough = 1075;
let pan = 80;

let resultC = bub + tof + iceC + milkC + dough + pan

console.log("Income: " + "$" + resultC);

let staffE = Number(input("Enter your staff expenses:"));

let otherE = Number(input("Enter your other expenses:"));

console.log("Staff expenses:");

console.log(`> ${staffE}`);

console.log("Other expenses:");

console.log(`> ${otherE}`);

console.log("Net income: " + ( resultC - staffE - otherE));