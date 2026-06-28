// Exercise 2: Constructor with Default Values
class Environment {
    constructor(name = "stage", port = 3000) {
        this.name = name;
        this.port = port;
    }
    getUrl() {
        return "https://"+this.name+":"+this.port;
    }
}

let env1 = new Environment();
console.log(env1.getUrl()); // default values from the parameters

let env2 = new Environment("prod", 3500);
console.log(env2.getUrl());