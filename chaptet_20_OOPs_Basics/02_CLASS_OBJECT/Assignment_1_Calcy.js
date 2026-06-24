class Calculator {

    constructor(a, b) {        
        this.a = a;
        this.b = b;
    }
    sub(a, b) {
        return this.a - this.b;
    }
    add(a, b) {
        return this.a + this.b;
    }
    mod(a, b) {
        return this.a % this.b;
    }
    mul(a, b) {
        return this.a * this.b;
    }
    div(a, b) {
        return this.a / this.b;
    }
}
let test = new Calculator(100,50);
console.log(test);
console.log("Substraction is ",test.sub());
console.log("Addition is ", test.add());
console.log("Modulus is ", test.mod());
console.log("Multiplication is ", test.mul());
console.log("Division is ", test.div());