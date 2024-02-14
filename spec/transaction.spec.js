import Transaction from "../src/transaction.js"

it("getTransactionData returns a string describing it's credit data.", () => {
    //Arrange
    let transaction = new Transaction(100, "credit");
    transaction.setBalance = 1000;
    transaction.setDate = "12/01/2012";

    //Act
    let transactionData = transaction.transactionData();

    //Assert
    expect(transactionData).toBe("12/01/2012 || 100.00 || || 1000.00");
}); 

it("getTransactionData returns a string describing it's debit data.", () => {
    //Arrange
    let transaction = new Transaction(100, "debit");
    transaction.setBalance = 1000;
    transaction.setDate = "12/01/2012";

    //Act
    let transactionData = transaction.transactionData();

    //Assert
    expect(transactionData).toBe("12/01/2012 || || 100.00 || 1000.00");
}); 