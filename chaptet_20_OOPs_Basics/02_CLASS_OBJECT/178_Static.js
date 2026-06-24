class Person {

    static nationality = "India";


    constructor(name) {
        this.name = name;
    }
    static common_fn() {

    }
}

let j = new Person("Bhartiya");

console.log(j.name);
console.log(Person.nationality);
