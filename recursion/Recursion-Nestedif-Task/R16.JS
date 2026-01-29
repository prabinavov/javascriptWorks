// 16 create a function greet(username) with a nested function that returs a persionalizzed message

function greet(username) {

function message(text) {

return `hellow ${username} ${text}`;

}
return message;

}



console.log(greet("vipin") ("goodmorning"));