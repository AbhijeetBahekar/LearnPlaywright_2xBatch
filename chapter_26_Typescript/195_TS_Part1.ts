console.log("Hi");
let msg: string = "good things";

function sayHello(msg: string): void {
    console.log(msg);
}

// without creating the .js file we can run this command
// npx ts-node chapter_26_Typescript/195_TS_Part1.ts

sayHello(msg);