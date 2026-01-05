//


function isPalindrome(text){

    let isPWord=true

    let result = ""


    for(let i=text.lenth-1 ;i>=0; i--){ //right side caracter varum

    result+=text[i]



}


return text==result
}

console.log(isPalindrome("malayalam"));

