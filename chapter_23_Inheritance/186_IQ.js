class BaseTest {
    setUp() {
        console.log("Base test: Browser open");
    }
    tearDown() {
        console.log("Base Test: Tear down method")
    }
}

class UITest extends BaseTest {
    setUp() {
        super.setUp();
        console.log("UI Test: Maximize window");
    }
    tearDown() {
        console.log("UI Test: Take screenshot");
        super.tearDown();
    }
}

let test = new UITest();
test.setUp();