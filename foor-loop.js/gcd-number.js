//gcd numbers  ,Gratest Common Divisior

var num1= 12;  

var num2= 24;

var gcd=1; 

var minNumber=num1<num2?num1:num2;  // find min number =12<24=t  num1 is minnumber

for(let i=1;i<=minNumber;i++){   // i = 1 , 1<12 t  2<12 

    if(num1%i==0 && num2%i==0){ //12%1==0 T && 24%1==0 T  ,   12%2==0 && 24%2==0 T
        gcd=i                  // gecd = 2
    }
}
console.log(gcd);




