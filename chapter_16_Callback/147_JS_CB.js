console.log("Test 1: Started");

setTimeout(function () {
    console.log("Test 2: API Response received");
}, 2000);  
// this test will run after 2 sec means at last [test 2] sequence test 1, test 3,  test 2

console.log("Test 3: moving to next test.")