export default class Printer{

    printTransaction(transaction){
        console.log(transaction.transactionData())
    }

    printAccountTransactions(account){
        console.log("date       || credit  || debit  || balance")
        account.getTransactions.reverse().forEach(transaction => {this.printTransaction(transaction)});
    }

}