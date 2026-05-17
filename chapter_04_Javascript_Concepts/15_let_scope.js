let a = 10; // Global Scope
console.log(a);
// function definition

function printHello() {
    console.log("Hello the testing academy")
    let a = 20;
    console.log("Local scope a : ",a);
    if(true){
        let a = 30;
        console.log("if loop a: ",a)
    }
    console.log("F -> ",a);
}

console.log("G -> ",a);

printHello();