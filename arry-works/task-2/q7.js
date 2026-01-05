//Write a JavaScript program to count even and odd numbers in an array.

var number=[2,4,5,7,8,8,9,12,3,44,20]

var evencount=0
var oddcount=0
    for(let n of number){

        if(n%2==0){

            evencount=+n
            evencount++


        }
        else if(n%2!=0){

            oddcount=+n
            oddcount++
        }
    }
    console.log(evencount);
    console.log(oddcount);
    
    
