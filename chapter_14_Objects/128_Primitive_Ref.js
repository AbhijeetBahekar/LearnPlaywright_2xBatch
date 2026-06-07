// Primitive vs Reference Types
let a = 10; // Primitive a and b are different
let b = a;
b = 99;
console.log(a);

// Objects — copied by REFERENCE , call by ref. 
// Reference - object, array, function
let obj1 = { val: 10 };
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val); // in object, value will be copied hence val = 99

// concept above is .. Object value created in the HEAP memory
// if we assign same object to other object, NO new object created, BOTH refer to same object value 
// in the HEAP