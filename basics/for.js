for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log("first for loop is done")

// second for loop
for(let i=0;i<10;i++){
    const ele = i;
    if(ele == 7){
        console.log("7 is the best number")
    }
    console.log(ele);
}
console.log("second for loop is done")
// table of 1-10
for(let i=0;i<=10;i++){
    console.log(`Outer loop value is ${i}`)
    for(let j=0;j<=10;j++){
        console.log(i+ ' * ' + j + ' = ' + i*j);
    }
}

// arrays and for loop
const myArr = [2,4,6,8,10]
for(let i=0;i<myArr.length;i++){
    // const ele = myArr[i];
    console.log(myArr[i])
}
console.log("loop end")


// break keyword
for (let index = 0; index < 20; index++) {
    if(index == 7){
        console.log(`7 is detected`);
        break;
    }
    console.log(`value of index is ${index}`)
}
console.log("loop end")


// continue keyword
for (let index = 0; index < 10; index++) {
    if(index == 7){
        console.log(`7 is skipped`);
        continue;
    }
    console.log(`value of index is ${index}`)
}