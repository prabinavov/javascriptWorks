//Given an array of numbers, count how many are even and how many are odd.


var number=[1,2,3,4,5,10,15,3,5,6,2,1,3,20]




var even=0



for(let n of number){
    if(n%2==0){
        even++
    }

    
}
//console.log(even);


var odd=0;

for(let n of number){
    if(n%2!=0){
        odd++
    }

}
console.log(`odd is total =>${odd},even is total=> ${even}`);


