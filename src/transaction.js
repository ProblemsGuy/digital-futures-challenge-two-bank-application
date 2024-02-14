export default class Transaction {
    #date;
    #balance;
    #amount;
    #type;

    constructor(amount, type){
        this.#amount = amount;
        this.#type = type;
        this.#date = "00/00/0000";
        this.#balance = 0;
    }

    get getType(){
        return this.#type;
    }
    
    get getAmount(){
        return this.#amount;
    }

    set setDate(date){
        this.#date = date;
    }

    set setBalance(balance){
        this.#balance = balance;
    }

    transactionData(){
        switch(this.#type){
            case "credit":
                return this.creditData();
            case "debit":
                return this.debitData();
        }
    }

    creditData(){
        return this.#date + " || " + this.#amount.toFixed(2) + " || || " + this.#balance.toFixed(2);
    }

    debitData(){
        return this.#date + " || || " + this.#amount.toFixed(2) + " || " + this.#balance.toFixed(2);
    }
}