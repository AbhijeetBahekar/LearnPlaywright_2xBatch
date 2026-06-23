
// Method 1: Object Literal (MOST COMMON ✅)
let user1 = {
    name: "Abhijeet",
    Age: 100,
    role: "QA"
};

// Method 2: Object Constructor (Old style ❌)
let user2 = new Object();
user2.name = "Jamed Bond";
user2.age = 25;
user2.role = "QA";

// Method 3: Empty Object + Add Later
let user3 = {};
user3.name = "Bill";
user3.age = 26;
user3.role = "Freelancer";

// Accessing Properties of the object

console.log(user1);

// Dot Notation (for simple keys)
console.log(user1.name, user1.Age, user1.role);

// Square Brackets (for variable keys or multiword)

console.log(user1["name"], user1["Age"], user1["role"]);

// using key

let key = "name";
console.log(user1[key]);