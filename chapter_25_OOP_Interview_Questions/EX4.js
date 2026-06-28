// Exercise 4: Method Chaining with this
class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
        return this;
    }
    display() {
        console.log("Count: "+this.count);
        return this;
    }
}

let c = new Counter();
c.display(); // this is default from line 4 

// now we want to increment then call it in single line multiple Times

new Counter().increment().increment().increment().display();

c.increment().increment().increment().display();