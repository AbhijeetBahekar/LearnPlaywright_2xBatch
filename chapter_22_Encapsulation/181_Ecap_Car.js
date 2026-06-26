class Car {
    #engine;

    constructor(name, engine_name) {
        this.name = name;
        this.#engine = engine_name;
    }
    getEngine() {
        return this.#engine;
    }
    setEngine(engine_name) {
        this.#engine = engine_name;
    }
}
let c = new Car("Maruti", "Vintara");
let d = new Car("Tata", "Nano");
console.log(c.name);
console.log(c.getEngine());
console.log(d.name);
console.log(d.getEngine());