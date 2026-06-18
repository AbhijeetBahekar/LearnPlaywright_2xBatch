function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!!");
    })
}

function gotoLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded!!");
    })
}

function enterCred() {
    return new Promise(function (resolve) {
        resolve("Credentials entered!!");
    })
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully!!");
    })
}

// this is clumsy process

// openBrowser()
//     .then(function (msg) {
//         console.log("Step 1", msg);
//         return goToLogin();
//     }).then(function (msg) {
//         console.log("Step 2 :", msg);
//         return enterCredentials();
//     }).then(function (msg) {
//         console.log("Step 3 :", msg);
//         return clickLogin();
//     }).then(function (msg) {
//         console.log("Step 4 :", msg);
//     }).catch(function (error) {
//         console.log("Error:", error);
//     }).finally(function () {
//         console.log("Done execution!");
//     });

async function runTheE2E() {
    let msg1 = await openBrowser();
    console.log("Step 1: ",msg1);

    let msg2 = await gotoLogin();
    console.log("Step 2: ",msg2);

    let msg3 = await enterCred();
    console.log("Step 3: ",msg3);

    let msg4 = await clickLogin();
    console.log("Step 4: ",msg4);
}

runTheE2E();
