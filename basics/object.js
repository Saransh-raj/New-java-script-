// object :- An object is a collection of key-value pairs

const student = {
    name: "Saransh",
    age: 19,
    email: "saranshraj@gmail.com",
    isStudent: true
};

// we can access object by using two methods 
console.log(student.name); // 1st
console.log(student["email"]); // 2nd

// we can also change the value of the object
student.email = "saransh@google.com"

// freeze the object value
// below line is code if uncomment we cant make any change that's why i prefer to comment
// Object.freeze(student)
// console.log(student);


// function in object
student.greeting = function(){
    console.log("hello JS user");
}

student.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
console.log(student.greeting());
console.log(student.greetingTwo());
