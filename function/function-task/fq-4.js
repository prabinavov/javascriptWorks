//Write a function that reverses a given string (without using built-in reverse).
//Input: "hello" → Output: "olleh"



function reverse(string){

let result = "";

for(i=string.length-1;i>=0;i--){

result = result + string[i];

}

return result;
}

console.log(reverse("hello"));
