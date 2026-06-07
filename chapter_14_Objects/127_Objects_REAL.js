let config = {}; // empty object

config.browser = "chrome"; // inserting key and values in the object
config.timeout = 3000;
config.testname = "login test";

console.log(config);

delete config.browser; // accessing single element from the object and deleting
console.log(config);


if (config.browser === "chrome") {
    console.log("I will execute my TC");
}


// let config2 = {
//     browser = "chrome",
//     timeout = 3000,
//     testname = "login test"
// }
// console.log(config2);
// this will give an invalid short hand property, as = is used : colon should be used

let config2 = {
    browser : "chrome",
    timeout : 3000,
    testname : "login test"
}
console.log(config2);