class BaseTest {
    setUp(): void {
        console.log("[BASE] Open browser");
    }
    tearDown(): void {
        console.log("[BASE] Close browser");
    }
}

class LoginTest extends BaseTest {
    override setUp(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {
    override setUp(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
test.setUp();

let apiTest = new APITest();
apiTest.setUp();