class Person {
    // Hide your childs
    #child1;
    #child2;
    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }
    getChild1() {
        return this.#child1;
    }

    setChild1(change_name) {
        this.#child1 = change_name;
    }

    getChild2() {
        return this.#child2;
    }
    setChild2(change_name2) {
        this.#child2 = change_name2;
    }
}
let p = new Person("James", "Bill", "Will")
console.log(p.name); //James
console.log(p.getChild1()); // Bill
console.log(p.getChild2()); // Will




