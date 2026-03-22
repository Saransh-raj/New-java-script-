const tinderUser = {}

tinderUser.id = "sam@123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// nested object
const regularUser = {
    email: "sammy@123",
    fullname: {
        userName: {
            firstName: "Saransh",
            lastName: "Raj"
        }
    }
}
console.log(regularUser.fullname.userName.firstName); // Saransh


// combining two object
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);


// we want only keys of tinderUser object
console.log(Object.keys(tinderUser));

// check property of tinderUser
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // return boolean value

// object destructuring
const course = {
    courseName: "javaScript",
    coursePrice: 999,
    courseInstructor: "Hittesh"
}

const {courseInstructor} = course // we can also make short name like {courseInstructor: Instructor}
console.log(courseInstructor);


