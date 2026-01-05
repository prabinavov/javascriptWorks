//A B C 1 2 3 7 Y z
//0 1 2 3 4 5 6 7 8


var word="ABC123"

var challengeCode="7YZ"



var result=(word.concat(challengeCode));


console.log(result);


var maskedstring=""

var count=0


for(i=0;i<result.length;i++){

    if(count==0){
        maskedstring+="X"
        count=0
    }
    else{
        maskedstring+=result[i]
    }


}
console.log(result);
