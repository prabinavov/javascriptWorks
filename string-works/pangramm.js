



var word= " the quick brown fox jumps over the lazy dog"

let alphabets="abcdefghijklmnopqrstuvwxyz"

var ispangram=true


for(let ch of alphabets){
    if(word.indexOf(ch)==-1){
        ispangram=false

        break
    }
    else{
        
    }
}
console.log(ispangram);
