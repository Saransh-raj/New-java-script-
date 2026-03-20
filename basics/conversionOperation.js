let score = 33

console.log(typeof (score)) // number

// conversion
let valueInString = String(score) // converted to String 
// (make sure write data type in capital in which you converting like in above capital S in string)
console.log(typeof valueInString)

// "33" -> 33
// "33abc" -> NaN
// true -> 1 || false -> 0


let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)

// convert string to number and add
let str = "234"
let str2 = Number(str) // string converting into number
let str3 = 543
console.log(str2 + str3) // adding

let val = 3
let negval = -val // negative of val
console.log(negval) // -3

console.log("2" + 2) // 22
console.log(2 + "2") // 22
console.log("2" + 2 + 2) // 222
console.log(2 + 2 + "2") // 42