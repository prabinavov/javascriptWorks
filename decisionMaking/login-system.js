// login 

var dbpassword = "Password@333";

var dbotp= 333 ;

var userpassword = "Password@333" ;

var userotp = 339 ;

if (dbpassword==userpassword){

    if(dbotp==userotp){

        console.log("login succesfull");
        
    }
    else{
        console.log("invalid otp");
        
    }
}
else{
    console.log("password is incorrect");
    
}


