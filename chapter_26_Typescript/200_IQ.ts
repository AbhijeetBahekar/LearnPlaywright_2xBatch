let responseCode: number[] = [200,201,404,500,302,403];

function getFailedCodes(codes: number[]): number[] {
    return codes.filter(function (code: number): boolean {
        return code >= 400;
    });
}

// ===================== you can bifurcate above nested func into two

// Function 1: Checks if a single code is a failure
// function isFailedCode(code: number): boolean {
//     return code >= 400;
// }

// Function 2: Filters the array using the first function
// function getFailedCodes(codes: number[]): number[] {
//     return codes.filter(isFailedCode);
// }





console.log("All codes", responseCode);
console.log("Failed Code are ", getFailedCodes(responseCode));


// -- ============