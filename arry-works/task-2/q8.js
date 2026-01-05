//Write a program to reverse an array.

var number=[1,2,3,4,5,6,7,8,9]

var revers=[]

var index=0

for(i=number.length-1;i>=0;i--){

    revers[index] = number[i];
    index++;

}
console.log(revers);
