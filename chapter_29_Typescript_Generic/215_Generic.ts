function getString(name: string): string {
    return "AMIT";
}

getString("Abhijeet");

function getFirstResult<T>(results: T[]) {
    return results[0]!; //The ! — non-null assertion operator

    function getFirstResult<T>(results: T[]) {
        return results[0]!; // ! says ← "trust me, not null/undefined"
    }
// ! tells the compiler: "this value is NOT null or undefined — stop warning me."
//  Compile - time only.Zero runtime effect(strips out in compiled JS).

}

let firstCode = getFirstResult<number>([100,200,300,400]);
let firstTest = getFirstResult<string>(["Login", "SignUp", "Cart"]);

console.log("First Code ", firstCode);

console.log("First Test ", firstTest);