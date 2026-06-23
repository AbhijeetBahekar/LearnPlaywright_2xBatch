let a = 10;
let b = 6;

// swap the varibale without using third varible
a = a - b // 10 - 6 = 4

b = b + a // 4 + 6 = 10

a = b - a // 10 - 4 = 6
console.log(`The swaped variable values are a = ${a} and b = ${b}`);

let c = 11;
let d = 12;

[ c , d] = [ d , c]

console.log(`The swaped variable values are c = ${c} and d = ${d}`);

let e = 13; // 14
let f = 14; // 13

let temp = e; // 13
e = f   // 
f = temp;
 

console.log(`The swaped variable values using 3 variables are e = ${e} and f = ${f}`);
