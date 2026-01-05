// anagram is word one == word 2


var word1="listen"

var word2="silent"




for(let ch of word1){

    if(word1.indexOf(ch)==word2){
        console.log("is a anagram");
        
    }
    else{
        console.log("not anagram");
        
    }
}
