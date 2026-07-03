interface Calculator {
    add(a: number, b: number): number;
    substact(a: number, b: number): number;
    multiply: (a: number, b: number) => number; // diff notation with arrow
}

const noObject = {
    id: 1
}

const calc: Calculator = {
    add: (a, b) => a + b,
    substact: (a, b) => a - b,
    multiply: (a, b) => a * b
}

console.log(calc.add(4,5));