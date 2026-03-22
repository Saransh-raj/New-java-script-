const myArr = [2,4,6,8,10]
const myHeros = ["ironman", "THOR", "BlackWidow"]

const myArray = new Array(1,2,3,4,5)
console.log(myArr[2]); // 6
console.log(myHeros[1]);


// array methods 

myHeros.push("Batman") // add element at the last index of the array
myHeros.push("HULK")
console.log(myHeros);

myHeros.pop() // remove element form the last index
console.log(myHeros);

myArr.unshift(10) // add element to the first index
console.log(myArr);

console.log(myArr.includes(3)) // return boolean value

const newArr = myArr.join() // add array into string
console.log(newArr);

// slice and splice
// slice :- does not change the orignal array
// splice :- change the original array by giving the index position

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3); // remove the element from the array which index range is mention
console.log("c ",myArr);
console.log(myn2);  // return the final array after splicing

