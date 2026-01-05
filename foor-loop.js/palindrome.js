

var text= "malayalam";

var result = ""

var stringLength=text.length-1;

for(let i=stringLength ;i>=0;i--){

    result=result+text[i]
}

console.log(result==text?"is a palindrome":"not a palindrome");




