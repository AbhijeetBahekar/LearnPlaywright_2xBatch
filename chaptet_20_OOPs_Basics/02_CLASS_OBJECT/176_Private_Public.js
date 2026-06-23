class credential {
    #apiKey; // Private variables are not allowed to be used outside. 
    user;
    constructor(user, key) {
        this.user = user;
        this.#apiKey = key
    }
    // customer made function by us

    parmodAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new credential("admin", "secret_key_1234");
console.log(cred.user);

// console.log(cred.apiKey); //undefined
// console.log(cred.#apiKey); // SyntaxError: Private field '#apiKey' 

const token = cred.parmodAuthHeader();
console.log(token);
