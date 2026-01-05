//Find the largest and smallest number in an array using a loop.



var number=[1,2,3,4,5,10,15,20]


var largest=0

for(let n of number){

    if(n>largest)
        largest=n
}
//smallest

var smallest=number[0]
for(let n of number){

    if(n<smallest){
        smallest=n
    }
}
console.log(`largest number is${largest}`,`smalet number is ${smallest}`);

