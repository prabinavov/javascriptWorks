//prime number

var number=7 ; // n=7

var isprime=true; //assume is prime = true

for(i=2;i<number;i++){  //i= satarting 2 and end number-1, bcq- 1 and the number is prime divisiors

    if(number%i==0){  //check 7%2==0 f 7%3
        isprime=false // 
       break; 
    }
}
console.log(isprime);
