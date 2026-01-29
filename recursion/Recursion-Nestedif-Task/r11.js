//11.write a program with nested function where the inner function access variables frome the outer functi0on and print it

function displayhw(limit){

    if(limit==0){
        return
    }
    else{

        console.log("hello world");
        displayhw(limit-1)
        
    }
}
displayhw(4)