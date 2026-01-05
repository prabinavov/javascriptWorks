// perfexct number


function isperfectNumber(number){

    let sum =0

    for(i=1;i<number;i++){ 

    if(number%i==0){  
        sum=sum+i;   

    }


}
return sum==number
}
console.log(isperfectNumber(6));

