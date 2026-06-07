// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

// Key will not be in the double quotes
// below key in doubt is actually JSON

let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };


let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

// let a1 = { status: 'pass' };
// console.log(a1.status);

//

let b = a; // assigned b = a ... pass
b.status = "fail"; // now b is fail as we assigned, b and a are same hence both fail
console.log("1 ",a.status);
console.log("2 ",b.status);

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (b === a) {
    console.log("true");
} else {
    console.log("false");
}