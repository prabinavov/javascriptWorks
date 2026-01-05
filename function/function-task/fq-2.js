//Write a function that returns the largest of three numbers.

//Input: 10, 25, 15 → Output: 25

function largest(num1,num2,num3){
    if(  num1>num3&&num1>num2){
       // console.log(`${num1}is largest`);

       return num1 
        
       
    }
    else if(num2>num3&&num2>num1){
       // console.log(`${num2}is largest`);
       return num2 
        
    }
    else{
        //console.log(`${num3}is largest`);
        return num3
    }

}
console.log(largest(10,25,15));


