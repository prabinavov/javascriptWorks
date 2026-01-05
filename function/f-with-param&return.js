// funtion with parameter and return value


function qube(num1){

    return num1*3

}

console.log(qube(5));






// odd with one parameter num retur true



function isodd(num){

  
    return num%2!=0
}
console.log(isodd(4));




// create a numberCheck function

// +ve number is positive number
// -ve number is negetive number
//zero if the num is zero


function numberCheck(num){
    if(num==0){
        return "zero";
        
    }
    else if(num<0){
        return "negetive"
    }
    else{
        return "positive"
    }
}
console.log(numberCheck(5));

