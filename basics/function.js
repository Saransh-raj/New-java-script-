function addTwoNumber(num1 , num2){
    console.log(num1 + num2);
    
}
addTwoNumber(2,4)

// function using return statement
function multiply(num1, num2){
    let result = num1 * num2
    return result
}

const result = multiply(2,4)
console.log("Resut: ", result);

// make a function which take name and show user login
function userLogin(username){
    return `${username} just loggin`
}

console.log(userLogin("saransh"))

// continious calculating 
function calculatCartPrice(...num1){ // (...num1) -> ... is rest operator it takes all the number and make array of all
    return num1
}
console.log(calculatCartPrice(200,300,400)); // [200,300,400]

// object and functions
const user = {
    name: "Saransh",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username ${anyobject.name} , the price is ${anyobject.price}`)
}

handleObject(user)

// array and function
const myArray = [100,200,300,400,500]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray))

// declare function and store it into variable
const funOne = function adding(num1,num2){
    console.log(num1+num2)
}

funOne(2,9) // if we store function in variable we have access by variable name