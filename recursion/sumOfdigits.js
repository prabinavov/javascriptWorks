

function sumOf(num){

    if(num==0){
        return 0

    }
    else{
        return num%10+sumOf(Math.floor(num/10))
        
        
    }
}
console.log(sumOf(234));
