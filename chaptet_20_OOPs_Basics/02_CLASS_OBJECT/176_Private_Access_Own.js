class credential {
  #apiKey; // Declared at the top
  user;

  constructor(user, key) {
    this.user = user;
    this.#apiKey = key; // 1. Accessed inside the constructor
  }

  // 2. Accessed inside a regular instance method
  parmodAuthHeader() {
    return "Bearer " + this.#apiKey; 
  }

  // 3. Accessed inside a getter (to read the value)
  get apiKey() {
    return this.#apiKey;
  }

  // 4. Accessed inside a setter (to modify the value safely)
  set apiKey(newKey) {
    if (newKey.length < 8) {
      throw new Error("Key is too short!");
    }
    this.#apiKey = newKey;
  }

  // 5. Accessed inside a static method (must pass the instance)
  static debugKey(instance) {
    return instance.#apiKey; 
  }
}

// --- Execution ---
let cred = new credential("admin", "secret_key_1234");

// Accessing via Getter
console.log(cred.apiKey); // secret_key_1234

// Modifying via Setter
cred.apiKey = "new_longer_secret_key_999"; 
console.log(cred.apiKey); // new_longer_secret_key_999

// Accessing via Static Method
console.log(credential.debugKey(cred)); // new_longer_secret_key_999
