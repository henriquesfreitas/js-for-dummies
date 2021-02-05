import { Client } from "./Client.js";

export class BankAccount {
    agency;
    _client;
    //that it's the way you can create a static var
    static countBankAcount=0;

    //there isn't a way to declare a private attribute, so the convention it's use _ before the var name
    //in the future the private attr can be declare like this: #saldo
    _balance = 0;

    constructor(agency, client){
        this.agency = agency;
        this._client = client;
        BankAccount.countBankAcount++;
    }

    //that it's the way to create getters and setters
    //so you define that a var it's private "_client" and allowed access through get/set
    set client(newClient){
        if(newClient instanceof Client){
            this._client = newClient;
        }
    }

    get client(){
        return this._client;
    }

    get balance(){
        return this._balance;
    }

    withdraw(amount){
        if(this._balance >= amount)
            this._balance -= amount;
    }

    deposit(amount){
        if(amount > 0)
            this._balance +=amount;
    }

    transfer(amount, bankAccount){
        this.withdraw(amount);
        bankAccount.deposit(amount);
    }
}