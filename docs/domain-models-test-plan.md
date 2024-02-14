# Domain Models and Test Plan

## User Stories

1. As a user, I want to be able to access an account, so I can keep track of my transactions in one centralized place.
2. As a user, I want to be able to deposit funds into an account, so I can increase the amount of money held in the account.
3. As a user, I want to be able to withdraw funds, so i can have access to money outside of the account.
4. As a user, I want to be able to print an account statement, so I can see exactly what the previous transactions have been.
5. As a user, I want to know what date my transactions are done on, so that I can make sure my accounts are accurate.
6. As a user, I want to see my credit and debit held in different columns, so I know how much my account has been given or taken from each transaction.
7. As a user, I want my credit and debit to be displayed in green and red so that I can clearly see the difference.
8. As a user, I want to have an overdraft I can take from my account, so I can have excess money taken out I can pay off later.
9. As an admin, I want to be able to set an overdraft per account that needs one, so that each account can have a different overdraft.
10. As an admin, I want to have be able to set an account to either have an overdraft, or not have one.
---

## Domain Model

| Object | Property | Method | Output |
| :----- | :------- | :----- | :----- |
| Account | pin @String<br>balance @Number<br>transactionList @Array[@Transaction] | getPin()<br>getBalance()<br>getTransactions()<br>depositFunds(@Transaction)<br>withdrawFunds(@Transaction) | @String<br>@Number<br>@Array[@transactions]<br>@Void<b>@Void<br>@Void |
| Transaction | date @String<br>amount @Number<br>balance @Number<br>type @String | getTransactionData()<br> | @String |
| OverdraftAccount | overdraft @Number | convertAccount(@Account)<br>withdrawFunds(@Transaction)<br>setOverdraft(@Number) | @Void<br>@Void |
| Printer | | printTransaction(@Transaction)<br>printAccount(@Account) | @Void<br>@Void |
---