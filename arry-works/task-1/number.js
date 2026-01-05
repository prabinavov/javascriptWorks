var number = [2,3,4,5,6,7,7,8,3,9,9,7]

// minNumber

console.log("print the minimum number ");


var minNumber=number[0]

for(let n of number){

    if(n<minNumber){

        minNumber=n
    }

}
console.log(minNumber);


//maxnumber
console.log("print maximum number");


var maxnumber=0;

for(let n of number){

    if(n>maxnumber){
        maxnumber=n
    }

}
console.log(maxnumber);


//sum of numbers


console.log("sum of numbers");


var sum=0;

for(let n of number){

    sum=sum+n;

}
console.log(sum);

//sumof odd numbers

console.log("sum of odd numbers");



var sum=0

for(let n of number){
    if(n%2!=0){
        sum=sum+n
    }
}
console.log(sum);


//sum of even numbers

console.log("sum of even numbers");

var sum=0

for(let n of number){
    if(n%2==0){
        sum=sum+n
    }
}
console.log(sum);


//divisioor of 3
console.log("divisior of 3");


var divisior=0

for(let n of number){
    if(n%3==0){
        console.log(n);
        
    }
}

// most frequent number

console.log("most frequent number");


var frequent=0;

for(let n of number){

    if(n==number){
        console.log(n);
        
    }
}




