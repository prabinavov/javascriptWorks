// display hello world in n times

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