//Create a function that returns the sum of digits of a number.
//Input: 1234 → Output: 10


 function sumofDigits(number){

let sum = 0;

for( i ;number1=0;){

let digit = number%10;

sum = sum + digit;

number = Math.floor(number/10);

}

return sum;

}

console.log(sumOfDigits(1234));