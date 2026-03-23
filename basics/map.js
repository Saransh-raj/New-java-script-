// map store the unique value into it if you store like map.set('IN', "India") then you can't store it again 

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('BZ', "Brazil")

console.log(map)

console.log('-----------------------------------------')

for (const key of map) {
    console.log(key)
}

console.log('-----------------------------------------')

const myObject = {
    js: "java script",
    cpp: "C++",
    java: "java"
}

for (const key in myObject) {
    console.log(key)
}

console.log('-----------------------------------------')

for (const key in myObject) {
    console.log(myObject[key])
}