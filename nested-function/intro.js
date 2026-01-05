// nested function
/*
function  outerFunctio(){
    function innerFuction(){
        console.log("inner function");
        
    }
    innerFuction()
}
outerFunctio()// outer function call innner function

*/
/*
function outer(num1){
    function wrapper(num2){
        return num1+num2
    }

    return wrapper
}
console.log(outer(10)(20));
*/
///

/*
function login(username){

    function checkpasswd(password){
        
        return username=="admin" && password=="admin@333"

    }
    return checkpasswd

}
console.log(login("admin")("admin@333"));
*/
//


function greetibg(username){

    function message(text){

        return  `hello ${username} ${text}`.toLocaleUpperCase()

    }
    return message
}

console.log(greetibg("vipin")("goodmorning"));


