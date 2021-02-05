import {BankAccount} from "./BankAccount.js"
import {Client} from "./Client.js";


//let it's the best way to declare a variable
//it has the same function as "var", aside from some minor differences
let client = new Client("My God v2", "123456789");
let bankAccount = new BankAccount("OMG", client);
bankAccount.deposit(10);
bankAccount.deposit(5);
bankAccount.withdraw(1);

console.log(bankAccount.balance);
// console.log(bankAccount.client);


let bankAccount2 = new BankAccount();
bankAccount2.deposit(100);

bankAccount.transfer(10, bankAccount2);

console.log(bankAccount);
console.log(bankAccount.client.cpf);
console.log(bankAccount.balance);
console.log(bankAccount2.balance);
console.log(BankAccount.countBankAcount);