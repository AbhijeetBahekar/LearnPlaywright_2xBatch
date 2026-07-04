function logged(originalMethod: any, context: any): any {
    return function (this: any, ...args: any[]) : any {
        console.log("Called decorator");
        return originalMethod.call(this, ...args);
    }
}

class Greeter {
    @logged
    hello(): string {
        return "Hi, I am there!!";

    }
}

let r = new Greeter().hello();
console.log(r);