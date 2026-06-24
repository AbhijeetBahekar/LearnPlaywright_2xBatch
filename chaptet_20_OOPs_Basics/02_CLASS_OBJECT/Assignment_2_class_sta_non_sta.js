class Simple {
    static city = "Pune";
    static company = "Cogni";

    constructor(pkg, np) {
        this.np = np;
        this.pkg = pkg;
    }

    static location() {
        console.log("Line 11 Static() location", this.city, this.company)
    }

    children() {
        console.log("I have kid")
    }
    
}

let test = new Simple("5555", "90 days");
console.log(test)
test.children();
Simple.location();