//


function number(num){

    if(num==0){

        return 
    }
    else{
        console.log(num%10);
        number(Math.floor(num/10))
        
        
    }

}
(number(123));
