class BaseTest {
    setup() {
        console.log("Base: Open Browser");
    }
}

class APIPage extends BaseTest {
    setup() {
        // super.setup(); // if you want to call the parent/base
        console.log("API Test: Open Browser");
    }
}

let test = new APIPage();
test.setup();