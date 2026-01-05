

var dbPin= 3322;
var dbBalance=4000;


var userPin = 3322;
var userAmount =4000;

if(userPin==dbPin){       //check pin is correct 
    if(userAmount<=dbBalance){ // if pin is true check user amount< db balance
        console.log("withdrow succesfull") //if true withdro successful
        
        

    
        
    }
    else{
        console.log("insufficent balance");
        
    }
}
else{
    console.log("pin is incorrect");
    
}
