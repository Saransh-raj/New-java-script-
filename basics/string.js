const name = "Saransh"
const repoCount = 10

console.log(name + repoCount); // Saransh10


console.log(`My name is ${name} and my repoCount is ${repoCount}`); //(String interpolation syntax)

const gameName = new String("SuperMario")
console.log(gameName[3]); // e
console.log(gameName.length) // 10
console.log(gameName.toUpperCase()) // SUPERMARIO
console.log(gameName.charAt(9)) // o

// slicing
const newGameName = gameName.substring(0, 4) 
console.log(newGameName) // supe

// trim method
const newString = "   saransh ,    "
console.log(newString.trim());

// replace method
const url = "https://saransh.com/saransh%20raj"
console.log(url.replace('20', '-'))

// split
const anotherName = "Sarash raj gupta"
console.log(anotherName.split(' ')); // [ 'Sarash', 'raj', 'gupta' ]
