// function normalizeJsBasicsLabel(name){
    
//     name1 = name.trim();
//     name2 = name1.replace(' ','-');
//     const prefix = "js-basic-"
//     name3 = `${prefix}${name2}`
//     name4 = name3.toLowerCase();
//     return name4;
// }

// let r = normalizeJsBasicsLabel(" Login Button ");
// console.log(r);

// F1 help

function normalizeJsBasicsLabel(name){

    // 1. Convert to lowercase
    let lower = name.toLowerCase();

    // 2. Replace non-alphanumeric characters (and dashes/underscores) with spaces
    let clean = lower.replace(/[^a-z0-9]/g, " ");

    // 3. Trim spaces from ends and collapse multiple inner spaces into a single dash
    clean = clean.trim().replace(/\s+/g,"-");

    // 4. Return with prefix (handle empty string case)
    return clean ? `js-basic-${clean}` : "js-basic"

}

// test cases 
console.log(normalizeJsBasicsLabel(" Login Button "));      // "js-basic-login-button"
console.log(normalizeJsBasicsLabel("User Profile: Edit!")); // "js-basic-user-profile-edit"
console.log(normalizeJsBasicsLabel("---Search@@Box---"));   // "js-basic-search-box"
console.log(normalizeJsBasicsLabel(" "));                   // "js-basic"
