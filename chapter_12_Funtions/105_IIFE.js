
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs 
// as soon as it is defined.
(function () {
    console.log("Hi");
})();


(function () {
    // playwright to run the test
})();

(function () {
    console.log("Staging")
})();


(() => {
    console.log("Setup complete");
})();