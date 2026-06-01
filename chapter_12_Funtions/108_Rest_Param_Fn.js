// Rest of the param. - can take multiple param without showing the number
function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);
}

logResult('Login Test', 1, 2, 3);
logResult('Reg Test', "Hello", "Pramod");
logResult('Reg Test:', "Hello222", "Pramod222");