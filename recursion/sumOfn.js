// sumOf numbers(5) => 1+2+3+4+5=15


function sumOfn(numbers){


    if(numbers==0){

        return 0
    }
    else{
        return numbers+sumOfn(numbers-1)
    }
}
console.log(sumOfn(3));

