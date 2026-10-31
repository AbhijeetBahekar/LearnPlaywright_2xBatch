var a = 10;// Global SCOPE

// var is function scoped


console.log("zeroth ",a);

function printHello() {
    console.log("Hello TheTestingAcademy!");
    var a = 20; // Local Scope for this function
    console.log("1st ",a);
    if (true) {
        var a = 30;
        console.log("2nd ",a); // 30 --- re-assignment of value
    }

}

printHello();
console.log("var is flipper, dual faced, no trust worthy");
var a = 50;
console.log("3rd ",a)

// var == trump, flipper, dual faced, no trust worthy