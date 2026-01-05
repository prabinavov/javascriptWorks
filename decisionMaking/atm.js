

var dbPin= 3322;
var dbBalance=4000;


var userPin = 3322;
var userAmount =5000;

if(userPin==dbPin){
    if(userAmount%100==0){
        if(userAmount<dbBalance)

    
        console.log("withdrow succesfull") 
        
        
    }
    else{
        console.log("insufficent balance");
        
    }
    
}
else{
    console.log("pin is incorrect");
    
}
