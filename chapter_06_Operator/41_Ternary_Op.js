// let raj_age = 18;
// let raj_go_goa = raj_age >= 18 ? "Raj will go to Goa" : "He cant go to Enjoy";
// console.log(raj_go_goa);

// multiple condition / nested

let raj_age = 45;
// let raj_can_drink = raj_age > 18 ? "He can go goa" : "He cannot go to Goa";
let raj_can_drink = raj_age > 18 ? (raj_age > 26 ? "He can drink" : "He can't drink") : "He cant go to Goa";
console.log(raj_can_drink);

/// --------------------- 

let statusCode = 404;
let category = 
    statusCode < 300 ? "Success":
        statusCode < 400 ? "Redirect":
            statusCode < 500 ? "ClientError" : "Server Error";
console.log(`Status ${statusCode} : ${category}`);


let x = 10;
let y = 13;
let result = x > y ? "x is the highest" : "y is the highest number"
console.log(result)

let a = 10;
let b = 13;
let c = 12;
let gtr_num = 
    a > b && a > c ? "a is highest number":
        b > c && b > a ? "b is highest number":
            c > a && c > b ? "c is highest number" : "all are equal";
console.log(`Number is ${gtr_num}`);


let temp = 35;
let feel = (temp >= 40) ? "Very hot": 
    (temp >= 35 ) ? "HOT":
        (temp >= 20) ? "Warm":
            (temp >= 10) ? "Cool" : "Very cold";
console.log("On this temperature : ", temp, " I feel : ", feel);
