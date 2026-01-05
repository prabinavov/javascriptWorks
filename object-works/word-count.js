

var text="this is a javascript program this javascript program is simple"


 var wordCount={}

 var word=text.split(" ")  // spliting text in the base of space


 for(let w of word){   // take each words in word

    if(w in wordCount){//

        wordCount[w]+=1
    }
    else{

        wordCount[w]=1
    }
 }
 console.log(wordCount);
 