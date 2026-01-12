// leap year

var year=2020

if((year%100==0 && year%400==0) || (year%100!=0 && year%4==0)){ //2033%100==0  false 2033%400==0 false or 2033%100!=0 true 2033%4==0 false

    console.log("year is leap year")
    
}
else{
    console.log("not a leap year")
    
}