//Write a program using a while loop to find the sum of odd digits in a given number.


var number = 7
var sum=0

for(i=1;i<=number;i++){
    if(i%2!=0){
        
        sum=sum+i
    }
    console.log(sum)
    
}