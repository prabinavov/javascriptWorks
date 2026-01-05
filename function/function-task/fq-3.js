//Create a function to count the number of vowels in a string.
//Input: "javascript" → Output: 3


function vowels(text){
    
var vowelcount=0

for(let ch of text){


    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u"){

        vowelcount++

    }  
}
 return vowelcount
}
console.log(vowels("javascript"));



