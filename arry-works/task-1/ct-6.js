//find the second largest element in an array.


var number=[1,2,3,4,5,10,15,3,5]

var largest=number[0]
var secondlargest=number[0]

for(i=1;i<number.length;i++){

    if(number[i]<largest){
        secondlargest=largest
    largest=number[i]
    }
    else if(number[i] < largest && number[i]>secondlargest){
        secondlargest=number[i];
    }
        
    }
    


console.log(secondlargest);
