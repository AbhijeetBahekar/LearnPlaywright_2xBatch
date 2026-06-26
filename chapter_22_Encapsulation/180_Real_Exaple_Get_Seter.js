class Person {
    // Hide you childs
    #child1;
    #child2;

    constructor(name, ch1, ch2) {
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;

    }

    getChild() {
        return [this.#child1, this.#child2];
    }

    setChild(change_name,change_name2) {
        this.#child1 = change_name;
        this.#child2 = change_name2
    }

}

let p = new Person("James", "Bill", "Will")
console.log(p.name); //James

console.log(p.getChild()); // Bill
