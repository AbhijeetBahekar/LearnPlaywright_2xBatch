class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name+ " is eating.");
    }
    sleep() {
        console.log(this.name+ " is sleeping.");        
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); //. It is used for the parent constructor. 
        this.breed = breed;
    }
    bark() {
        console.log(this.name+ " can bark as well");
    }

    eat() {
        console.log(this.name+ " is eating child.");
    }

}

// let dog = new Dog("Bruno", "Kanghal");
// console.log(dog.name);
// console.log(dog);

let d = new Dog("Bruno", "Kanghal");
d.bark();
console.log(d.name);
console.log(d.breed);
d.eat();