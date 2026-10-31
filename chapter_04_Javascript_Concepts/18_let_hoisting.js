console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;

console.log("let will NOT allow hoisting, throws an error of ReferenceError")


{
    // ---- TDZ for "score" starts here ----  temporal dead zone
    // console.log(score);  // ReferenceError!
    // score = 50;          // ReferenceError!
    // typeof score;        // ReferenceError!
    // ---- TDZ for "score" ends here ----
    let score = 100;        // Declaration reached, TDZ ends
    console.log(score);     // 100 (safe to access now)
}


// Temporal Dead Zone (TDZ)

// • What it is: The TDZ is the specific time span (or region) in a block from 
// the start of the scope until the code execution actually reaches and evaluates 
// the let or const (or class) declaration line
// • During the TDZ, the variable does exist in memory (because of hoisting), 
// but it is marked as uninitialized.
// • If you try to access, read, or write to the variable while it is in the TDZ, 
// JavaScript throws a ReferenceError