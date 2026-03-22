let myDate = new Date()
console.log(myDate); // 2026-03-22T02:51:38.939Z
console.log(myDate.toString()); // Sun Mar 22 2026 02:51:38 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString()); // 3/22/2026, 2:51:38 AM
console.log(myDate.toLocaleDateString()) // 3/22/2026
console.log(myDate.toDateString()); // Sun Mar 22 2026

let myCreatedDate = new Date("01-14-2026") // mm-dd-yyyy
console.log(myCreatedDate.toLocaleDateString());


let myTimeStamp = Date.now()
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

