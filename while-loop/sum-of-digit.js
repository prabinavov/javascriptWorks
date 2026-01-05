// w.a.p to displya sum of digits (3+4+5) =12


var num= 543;

sum=0;

while(num!=0){

    let digit = num%10;
    sum=sum+digit;
    num=Math.floor(num/10);



    
}
console.log(sum);
