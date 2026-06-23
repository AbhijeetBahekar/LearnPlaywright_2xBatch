class Car {
    // principle of CAB

    // C - Constructor
    constructor(name_given_during_obj_creation) {
        this.name = name_given_during_obj_creation;
    }

    // A - Attributes

    // B - Behaviour
    drive() {
        console.log("I am driving ", this.name);
    }
}

const tesla = new Car("Model S");
tesla.drive();

const kia = new Car("Karens");
kia.drive();