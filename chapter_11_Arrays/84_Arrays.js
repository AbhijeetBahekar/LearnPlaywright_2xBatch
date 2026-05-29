// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];

// Array constructor

let scores = new Array(4);
scores[0] = 1;
scores[1] = 3;
scores[2] = 5;
scores[3] = 7;

let scores2 = new Array(3,4,5,6);

console.log(scores2);

console.log(scores2[0]);

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);

// array of

let test = Array.of(10, 20, 30, 40, 50);
console.log(test);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]
console.log(chars);

let chars1 = Array.from(1,2,3); // works on charachters or string only ... error 
// ["h", "e", "l", "l", "o"]
console.log(chars1);

let numbers1 = Array.from("123456789"); //  works on charachters or string only ... error , this is number only in JS
console.log(numbers1);