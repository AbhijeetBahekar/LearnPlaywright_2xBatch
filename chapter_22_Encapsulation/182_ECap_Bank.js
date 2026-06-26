class ICICI {
    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;
    }
    setBalance(balance, isCashier) {
        if(isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not Allowed, not a cashier");
        }        
    }
}

// let p = new ICICI("Abhijeet", 5000);
// console.log(p.getBalance());

// p.setBalance(3000, false); // here we set the balance and isCashier boolean value 'false'
// p.getBalance();

let d = new ICICI();
d.setBalance(10000, true);
console.log(d.getBalance());