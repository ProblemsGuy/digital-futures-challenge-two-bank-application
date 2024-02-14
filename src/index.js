import Transaction from "./transaction.js";
import Account from "./account.js";
import Printer from "./printer.js";

let trans1 = new Transaction(1000, "credit");
trans1.setDate = "10/01/2012";
let trans2 = new Transaction(2000, "credit");
trans2.setDate = "13/01/2012";
let trans3 = new Transaction(500, "debit");
trans3.setDate = "14/01/2012";

let account = new Account("1234");
account.parseTransaction(trans1);
account.parseTransaction(trans2);
account.parseTransaction(trans3);

const printer = new Printer();
printer.printAccountTransactions(account);
