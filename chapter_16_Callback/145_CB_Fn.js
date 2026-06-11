function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item);
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("calling 9876543210");
}

// cafe("Burger", callWhenTableisReady);

cafe("Pizza", function() {
    console.log("calling another number - 0099889900");

});

cafe("MOMO's", () => {
    console.log("Calling with arrow function from line 22")
});