// write a ecursive function to print numbers uo to n

function onetoNum(Number){
    
    if(Number==0){
        return
    }
else{
 onetoNum(Number-1)
 console.log(Number);
}     
    
}
onetoNum(5)
