class bank{
    db={
    1000:{"acno":1000, "username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001, "username":"Laisha", "password":1001,"balance":5000,transaction:[]},
    1002:{"acno":1002, "username":"Vyom", "password":1002,"balance":3000,transaction:[]},
}
}

//1 create a function for validate account number. To validate account check
validateAcnon[acno]{
    return acno in db?true:false
}
//if account number in db return true otherwise return false

//2 create a function for authenticate user using account number and password 

aututication[acno,pass]{
    if(this.validateAcnon(acno)){
        if(pass==this.db[acno].password){
            class bank{
                fundTransfer(fromac,toac,amout){
                    if(this.validateAcnon(fromac)&&this.validateAcnon(fromac)){

                        if(this.db[fromac].balance>amout){

                            this.db[fromac].balance -= amout;

                            this.db[toac].balance += amout;

                            console.log("transacttion success full");
                            


                        }
                        else{
                            console.log("trassaction faild, insufficent balance!!");
                            
                        }
                    }
                    else{
                        console.log("error");
                        
                    }
                    
                    }
            }
          
            
        }
    }
}
  b1=new bank()

            console.log(b1.validateAcnon(1000));

            b1.aututication(1000,1006)

            console.log(b1.getbalance(1001));
            
            b1.fundTransfer(1000,1002,1003)

            console.log(b1.getbalance(1000));

            console.log(b1.getbalance(1002));
            
            
            

//if both are in db then print 'access granted' otherwise print 'permission denied'
//authenticated(acno,pswd)?access granted else permission denied