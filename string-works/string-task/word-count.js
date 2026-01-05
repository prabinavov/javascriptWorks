//Write a program to count the number of words in a string using string methods.

function words(string) {

let words =string.split(" ");

let count = 0;

for(let i=0;i<words.length;i++){

count ++;

}

return count;

}

console.log(words("why are you crying"))