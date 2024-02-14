import Account from "./account.js";
export default class OverdraftAccount extends Account {
    #overdraft;
    #pin;
    #balance;
    #transactionList;

    constructor(pin,overdraft){
        super(pin);
        this.#overdraft = -overdraft;
        this.#transactionList = [];
    }

    set setOverdraft(overdraft){
        this.overdraft = -overdraft;
    }
    get getBalance(){
        return this.#balance;
    }

    withdrawFunds(transaction){
        this.#balance -= transaction.getAmount;
        this.#balance = this.#balance > this.#overdraft ? this.#balance : this.#overdraft;
        transaction.setBalance = this.#balance;
        this.#transactionList.push(transaction);
    }
}