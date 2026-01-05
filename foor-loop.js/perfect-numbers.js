// perfect numbrs

var number=6;  //number=6


var sum = 0;  //sum=0



for(i=1;i<number;i++){ // i=1  i++=2  2<6=t, i++3 3<6=t i++4 4<6=t

    if(number%i==0){  //6%1==0 t 6%2==0 t, 6%3==0 t,  6%4==0  F
        sum=sum+i;   //sum=0+1 ,  sum=1+2=3,  sum=3+3=6

    }


}
console.log(sum==number?"perfect-number":"not a perfect number"); //sum==number = 6=6 t ,perfect number


