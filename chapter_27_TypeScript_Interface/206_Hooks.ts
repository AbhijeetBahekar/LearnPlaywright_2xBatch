interface TestHook {
    (testName: string) : void;
}

let beforeEachHook: TestHook = function (testName: string) : void {
    console.log("[BEFORE] setting up: " +testName);
      // make a connection to lib
}

let afterEachHook: TestHook = function (testName: string) : void {
    console.log("[AFTER] Tearing down: " + testName);
}

interface TestCase {
    id: number,
    name: string,
    status: string,
    duration: number;
}

beforeEachHook("Login TEST");

let test1: TestCase = {
    id: 1,
    name: "Login with VALID credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-"+test1.id+": "+test1.name+ " - "+ test1.status)
afterEachHook("Login Test");