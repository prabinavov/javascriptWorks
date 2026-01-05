// 


var number = 8208;

var numbercopy=number;

var original= number;



digitcount = 0;

sum=0;



while(number!=0){

    number = Math.floor(number/10);


    digitcount++; 



}

while(numbercopy!=0){

   let digit= numbercopy%10;

   let exponent = digit**digitcount;

   sum=sum+exponent;

   numbercopy=Math.floor(numbercopy/10)

   

}
console.log(sum==original?"amstrong":"not aan amstrong");




