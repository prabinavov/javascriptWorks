// write a function to print leap year or not


function isleapyear(year){
    if((year%100==0  && year%400==0) || (year%100!=0 && year%4==0)){
        return true
    }
    else{
        return false
    }
}
console.log(isleapyear(2021));
