// Write a program to count how many times a specific word appears in a sentence.

function Cword(sentence, word) {

let count = 0;

let words = sentence.split(" ");

     for (let i = 0; i<words.length; i++) {

          if (words[i] == word) {

          count++;

        }

    }

return "Count: " + count;

}

console.log( Cword("hey by by see you tommarow by.. ", "by"));