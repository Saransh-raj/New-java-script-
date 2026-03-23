// if else condition

const temperature = 40
if(temperature === 40){
    console.log("Temperature is 40");
}else{
    console.log("Not equal");
}

if(temperature >= 40){
    console.log("Summer Season");
}else{
    console.log("Winter Season");
}

// else-if statement
const balance = 1000

if(balance >= 1000){
    console.log("Rich");
}else if(balance < 1000){
    console.log("Poor");
}else{
    console.log("middle class");
}

// && operator and || operator
const userLoggedIn = true
const debitCard = true
const googleLoggedIn = false

// AND operator
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

// OR operator
if(userLoggedIn || googleLoggedIn){
    console.log("Allow...!!")
}