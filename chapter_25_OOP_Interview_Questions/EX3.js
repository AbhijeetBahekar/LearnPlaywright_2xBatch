// Exercise 3: `this` Refers to Current Object
class User {
    constructor(name) {
        this.name=name;
    }
    greet() {
        console.log("Hi, I am "+this.name);
    }
}

let u1 = new User("Krishna");
u1.greet();