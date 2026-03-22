const marvel_hero = ["Ironman", "Thor", "BalckWidow"]
const dc = ["Spiderman", "flash", "batman"]

// pushing
marvel_hero.push(dc) // ['Ironman', 'Thor', 'BalckWidow',[ 'Spiderman', 'flash', 'batman'] ]
console.log(marvel_hero);
console.log(marvel_hero[3][1]); // flash

// concatenation 
const fruits = ["apple","banana","cherry"]
const vegetable = ["onion","potato","cauliflower"]
const allvege = fruits.concat(vegetable)
console.log(allvege); // [ 'apple', 'banana', 'cherry', 'onion', 'potato', 'cauliflower' ]

// one more way to concatenate 
const subject = ["Maths", "Science", "SST"]
const student = ["aman","arav","arya"]

const school = [...subject, ...student]
console.log(school);

// array inside array problem (convert nested array into single array)
const nested_arr = [1, 2, 3, 4, [5, 6], 3, 5, 4, [5, 7, 8, [9, 10 ] ] ]
const single_arr = nested_arr.flat(Infinity)
console.log(single_arr);

// string into array
console.log(Array.isArray("Saransh")) // check it is array or not 
console.log(Array.from("Saransh")) // convert it into array ex:-['s','a','r','a','n','s','h']

// variable into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
