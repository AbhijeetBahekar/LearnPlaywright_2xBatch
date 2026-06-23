let dob = 1980;

const dt = new Date();

let this_year = dt.getFullYear();
// let new_year = Array.from(this_year)

console.log(this_year);

console.log(`Your age is ${this_year-dob}`);