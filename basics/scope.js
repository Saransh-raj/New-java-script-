let a = 1; // global

function demo() {
    let b = 2; // function scope

    if (true) {
        let c = 3; // block scope
        console.log(a, b, c); // ✅
    }

    console.log(a, b); // ✅
    // console.log(c); ❌
}

demo();

function one(){
    const username = "Saransh"

    function two(){
        const website = "youtube.com"
        console.log(username);
    }
    // console.log(website)  not define it is function scope
    two()
}
one()