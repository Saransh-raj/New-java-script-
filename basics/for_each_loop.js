const coding = ['java','cpp','python','ruby','java script','css','HTML']
// for each loop
coding.forEach( function (val){
    console.log(val)
})

console.log('------------------------------------------');

// for each loop and using arrow
coding.forEach( (item) => {
    console.log(item)
})

console.log('------------------------------------------');

// ############################# ARRAY AND FOR-EACH-LOOP ################################
const myCoding = [
    {
        language: "java Script",
        filename: "js"
    },
    {
        language: "python",
        filename: "py"
    },
    {
        language: "java",
        filename: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language)
})

console.log('------------------------------------------');

// filter method
const myNum = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNum.filter( (num) => num > 4 )
console.log(newNums)

console.log('------------------------------------------');

// filter method in large data base real world example
const book = [
    {
        title: "book one",
        genre: "fiction",
        publish: "1992",
        edition: "2003"
    },
    {
        title: "book two",
        genre: "history",
        publish: "1995",
        edition: "2007"
    },{
        title: "book three",
        genre: "comedy",
        publish: "1952",
        edition: "2003"
    },{
        title: "book four",
        genre: "history",
        publish: "2000",
        edition: "2012"
    },{
        title: "book five",
        genre: "science",
        publish: "1984",
        edition: "2015"
    },
    {
        title: "book six",
        genre: "non-fiction",
        publish: "1945",
        edition: "2012"
    },{
        title: "book seven",
        genre: "science",
        publish: "1965",
        edition: "2019"
    },
]

const userBooks = book.filter( (bk) =>  bk.genre === "history" )

console.log(userBooks)

console.log('------------------------------------------');


const userbook = book.filter( (bk) => bk.publish > 1980)

console.log(userbook)

console.log('------------------------------------------');

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNumbers = myNumbers.map( (num) => num + 10)
console.log(newNumbers)