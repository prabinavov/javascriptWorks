//Write a JavaScript program to find the largest element in an array.



var numbers=[1,2,3,5,5,6,6,7,7,7,8]


var largest=0

for(let n of numbers){

    if(n>largest){
        largest=n    }


}
console.log(largest);
