// cerate a bank with attributes

//acno,name,acc_type,balance

//createAcc()
//deposit(amount)
//withdrow(amount)
//balanceEnq()


class Bank{


    CreateaAcc(acno,costomer_Name,ac_type,balance,){

    this.acno=acno
    this.costomer_Name= costomer_Name
    this.ac_type=ac_type
    this.balance=balance
    
}

 deposit(amount){
    this.balance+=amount
    console.log(`${this.acno}has ben creadited at${this.amount} your aval balance is ${this.balance}`);
    
 }
}
withdrow(amount){
    if(amount>this.balance){
        console.log("insufficent balance transaction canceld");
        

    }
    else{
        console.log("abstracted method is tracked by the");
        
    }
}


