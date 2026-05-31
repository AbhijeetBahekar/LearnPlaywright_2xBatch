const greet = function (name) {
    return `Hello, ${name}`;
} // you can assign function to const and call it with contant name

let r = greet("Pramod"); // assigning the function to variable
console.log(r);


// Type 4 normal Fn
function greet1(name1) {
    return `Hello, ${name1}!`;
}


// Functions as Expression
const greet2 = function (name1) {
    return `Hello, ${name1}!`;
}

console.log(greet1("Bob1"));
console.log(greet2("Bob2"));