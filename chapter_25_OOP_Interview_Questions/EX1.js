class Bug {
    constructor(title, severity) {
        this.title = title;
        this.severity = severity;
    }
    display() {
        console.log("["+ this.severity + "] "+ this.title);
    }
}

let b1 = new Bug("Login Crashed.", "Critial");
b1.display();

let b2 = new Bug("Typo in footer.", "Low");
b2.display();