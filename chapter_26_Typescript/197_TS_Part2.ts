let unknown: unknown = "hello";

if (typeof unknown === "string") {
    console.log("Hi");
}

let message: string = "Hello";


// Function annotations
function greet1(name1: string): string {
    return `Hello, ${name1}!`;
}
console.log(greet1("James"));
// Arrow function annotations
const multiply = (a1: number, b1: number): number => a1 * b1;

// Object annotations
let user: {name1: string; age1: number; } = {
    name1: "John",
    age1: 30
};