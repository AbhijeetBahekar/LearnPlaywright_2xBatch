class person {


    constructor() {
        console.log("I will be created when an object is created/instantiated");
    }

    // attributes 
    name;
    email;
    salary;
    address;

    // Behavior
    sleep() {};
    eat() {};
    walk() {};
}

const obj_ref = new person(); // new person(); line will call the constructor, line no. 4
// obj_ref = Is called the object reference (address)
// new person(); = is the object with the new keyword

// console.log(obj_ref);