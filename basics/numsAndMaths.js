const balance = 400
console.log(balance);

const Balance = new Number(100)
console.log(Balance);

console.log(Balance.toString().length) // convert into string and print the length

console.log(balance.toFixed(2)) // convert into two decimal places ex :- 400.00

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // separate into commas ex :- 1,000,000

console.log(hundreds.toLocaleString('en-IN')) // it also convert but into indian style ex :- 10,00,000

//############################### MATHS ##################################//

console.log(Math); // Object [Math] {}
console.log(Math.abs(-3)); // convert negative value into positive ex :- 3
console.log(Math.round(4.6)) // round off the value ex:- 5
console.log(Math.max(2,4,1,5,6));
console.log(Math.min(9,7,5,8,2));


console.log(Math.random()) // it give the value b/w 0-1

console.log(Math.random()*10) // it give the value b/w 0-10

console.log(Math.random()*10 + 1); // it give the value b/w 1-10

console.log(Math.floor(Math.random() * 10 ) + 1 ); // give value into single digit not into decimal

const max = 20
const min = 10
// below code print the number b/w the range of 10-20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)