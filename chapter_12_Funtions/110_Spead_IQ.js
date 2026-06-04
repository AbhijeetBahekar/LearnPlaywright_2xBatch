function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
add(...num);
console.log(add(...num));

console.log("-----------");

let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
hasError(...responseCodes); // true
console.log(hasError(...responseCodes));
// OR assign it to varibale and display
let show = hasError(...responseCodes); // true
console.log(show);