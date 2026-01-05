//
//Write a JavaScript program to capitalize the first letter of each word using string methods.



function capitalize(text) {

        let words= text.split(" ")

        let result = ++

    for(i=0; i<words.length; i++){

        let word = words[i];

        result += word[0].toUpperCase() + word.slice(1) + ""

}

return result;
}
console.log(capitalize("javascript is a programming language"))