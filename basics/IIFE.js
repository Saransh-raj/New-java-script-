// IIFE :- Immediately invoked function expression
// why :- avoid global pollution

(function hello(){
    console.log("hello world")
})();

// in below code a and b are private and not accessible outside
(function() {
    let a = 10;
    let b = 20;
    console.log(a,b)
})();

// parameter passing
(function name(name){
    console.log(`welcome ${name} to my website`)
})("Saransh");

// arrow IIFE
(() => {
    console.log("Hi Saransh");
})();