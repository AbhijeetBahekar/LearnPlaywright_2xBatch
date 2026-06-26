class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;  // this.#balance = this.#balance+ amount;
        }
    }

    getBalance(){
        return this.#balance; // controlled access
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());