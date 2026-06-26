class testCase {

    // parameterized constructor
    constructor(name, status, priority) {
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display() { // this is a method, means function inside the class
        console.log(this.name + " -> " + this.status + " -> " + this.priority);
    }
}

function f1() {
    console.log("This is a function, outside the class")
}

let loginTC = new testCase("Login Test", "Pass", "P0");
loginTC.display();
f1();