class TestCase {
    execute() {
        console.log("Running generic test")
    }
}

class UnitTest extends TestCase {
    execute() {
        console.log("Running UnitTest case");
    }
}

class APITest extends TestCase {
    execute() {
        console.log("API Test executed");
    }
}

class E2ETest extends TestCase {
    execute() {
        console.log("End 2 End Test executed");
    }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];

tests.forEach(function (test) {
    test.execute();
});

console.log("--------------------------");

for (let test of tests){
    test.execute();
}