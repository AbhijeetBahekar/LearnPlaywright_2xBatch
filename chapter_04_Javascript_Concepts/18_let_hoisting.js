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