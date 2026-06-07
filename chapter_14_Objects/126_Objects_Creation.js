let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

// below reference is used hence reference is not same
if (c === d) {
    console.log("true");
} else {
    console.log("false");
}

// ans - False

// Why This Happens 
// Memory Reference: 
// In JavaScript, objects are compared by their memory address (reference), not by their content.
// Distinct Objects: 
// Objects c and d look identical, but they point to two entirely different locations in memory.
// Strict Equality: 
// The === operator checks if both variables point to the exact same physical object.