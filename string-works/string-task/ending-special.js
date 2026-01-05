//Write a program to check whether a string ends with a specific character or word.

function endswithword(string,word){

        let lastword = string.slice(-word.length);

        if(lastword=-word) {

        return "The string ends with " +word

        }

    else{

        return "The string ends with" + word;

    }
}
console.log(endswithword("my face is not my heart", " heart"))