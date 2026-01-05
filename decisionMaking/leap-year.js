// display leap year or not

var year= 2033;

if((year%100==0 && year%400==0) || (year%100!=0 && year%4==0)){ //2033%100==0  false 2033%400==0 false or 2033%100!=0 true 2033%4==0 false

    console.log("leap year");
    
}
else{

    console.log("not a leap yar");
    
}