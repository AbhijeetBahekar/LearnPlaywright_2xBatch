function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(10, 5, function(x, y) {
    return x + y;
})

console.log(sum);

function step1(callback){
    console.log("open browser");
    callback();
}

function step2(callback){
    console.log("Navigate to page");
    callback();
}

function step3(callback){
    console.log("click the button");
    callback();
}

function step4(callback){
    console.log("click the last button");
    callback();
}

step1(function() {
    step2(function() {
        step3(function() {
            step4(function (){
                console.log("Finally - End")
            });
        });
    });
});
