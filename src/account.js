export default class Account {
    #balance;
    #pin;
    #transactionList;

    constructor (pin){
        this.#pin = pin;
        this.#balance = 0;
        this.#transactionList = [];
    }

    get getBalance() {
        return this.#balance;
    }

    get getTransactions() {
        return this.#transactionList;
    }

    parseTransaction(transaction){
        switch (transaction.getType){
            case "credit":
                this.depositFunds(transaction)
                break;
            case "debit":
                this.withdrawFunds(transaction)
                break;
        }
    }
    

    depositFunds(transaction){
        this.#balance += transaction.getAmount;
        transaction.setBalance = this.#balance;
        this.#transactionList.push(transaction);
    }

    withdrawFunds(transaction){
        this.#balance -= transaction.getAmount;
        this.#balance = this.#balance > 0 ? this.#balance : 0;
        transaction.setBalance = this.#balance;
        this.#transactionList.push(transaction);
    }

}