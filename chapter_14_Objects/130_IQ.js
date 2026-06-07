const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);
console.log(user.name);
console.log(user["age"]); 
// all above are valid and all will be printed


// Dynamic property access
const key = "age";
console.log("Key ",user[key]);
console.log("Age ",user["age"]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);


let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// {
//   value: "Login",
//   writable: true,       ← can change the value
//   enumerable: true,     ← shows in for...in / Object.keys()
//   configurable: true    ← can delete or redefine
// }