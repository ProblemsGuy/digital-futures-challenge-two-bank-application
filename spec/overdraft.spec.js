import OverdraftAccount from "../src/overdraft.js";

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

it("When a withdrawal is made, it is able to withdraw up to it's overdraft.", () => {
    //Arrange
    let overdraft = new OverdraftAccount("1234",50);
    let trans1 = new MockTrans(70,"debit");

    //Act
    overdraft.parseTransaction(trans1);
    //Assert
    expect(overdraft.getBalance).toBe(-50);
});