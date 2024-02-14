import Account from "../src/account.js"

class MockTrans{
    constructor(amount, type){
        this.amount = amount;
        this.type = type
    }

    get getType(){
        return this.type;
    }

    get getAmount(){
        return this.amount;
    }

    set setBalance(balance){}
}

it("When an account makes a deposit, the balance changes", () => {
    //Arrange
    let account = new Account("1234");
    let trans = new MockTrans(100,"credit");

    //Act
    account.parseTransaction(trans);
    
    //Assert
    expect(account.getBalance).toBe(100)
});

it("When an account makes a deposit, a transaction is added to the list.", () => {
    //Arrange
    let account = new Account("1234");
    let trans = new MockTrans(100,"credit");

    //Act
    account.parseTransaction(trans);

    //Assert
    expect(account.getTransactions.length).toBe(1);
});

it("When an account makes a deposit, the balance changes", () => {
    //Arrange
    let account = new Account("1234");
    let trans1 = new MockTrans(100,"credit");
    let trans2 = new MockTrans(50,"debit");

    //Act
    account.parseTransaction(trans1);
    account.parseTransaction(trans2);
    
    //Assert
    expect(account.getBalance).toBe(50)
});

it("When making a withdrawal, a transaction is added to the list.", () => {
    //Arrange
    let account = new Account("1234");
    let trans1 = new MockTrans(100,"credit");
    let trans2 = new MockTrans(50,"debit");

    //Act
    account.parseTransaction(trans1);
    account.parseTransaction(trans2);
    
    //Assert
    expect(account.getTransactions.length).toBe(2);
})

it("When making a withdrawal over the amount in the account, the balance becomes 0.", () =>{
    //Arrange
    let account = new Account("1234");
    let trans1 = new MockTrans(100,"credit");
    let trans2 = new MockTrans(150,"debit");

    //Act
    account.parseTransaction(trans1);
    account.parseTransaction(trans2);
    
    //Assert
    expect(account.getBalance).toBe(0)
})