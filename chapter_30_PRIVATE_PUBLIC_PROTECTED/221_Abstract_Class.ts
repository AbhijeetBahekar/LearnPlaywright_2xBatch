abstract class BaseTest {
    protected testName: string;
    constructor(testName: string) {
        this.testName = testName;        
    }
    abstract setup(): void;
    abstract execute(): void;
    abstract teardown(): void;
    abstract loan(): void;

    laon1(): void {
        console.log("HELLO ALL")
    }
}

class UITest extends BaseTest {
    setup(): void {
        console.log(" Setup: Launch browser");
    }
    execute(): void {
        console.log(" Execute: Click buttons, fill forms");
    }
    teardown(): void {
        console.log(" TearDown: Close Broswer");
    }
    loan(): void {
        console.log(" GIVE LOAN");
    }
}

let test = new UITest("Login happens");
test.setup();