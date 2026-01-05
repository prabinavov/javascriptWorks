//Write a JavaScript program to replace all vowels with * in a string.

function replace(string) {

let result = "";

for(let ch of string) {

            if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="0" || ch=="U"){

            result += "*";

            }

        else{

        result += ch;

        }
    }

return result;

}


console.log(replace("everything will be fine"))