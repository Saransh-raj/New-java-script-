// syntax of arrow function
const functionName = () => {
    // code
};

// this keyword in java script
const user = {
    username: "Saransh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
    }
}
user.welcomeMessage()

// one more syntax of arrow function
const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2) (this is also a way)

console.log(addTwo(3,7))