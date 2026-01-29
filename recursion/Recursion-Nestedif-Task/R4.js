//4.write a recursive functrion to print numbre frome n to 1


function onetoNum(Number){
    
    if(Number==0){
        return
    }
else{
 
 console.log(Number);
 onetoNum(Number-1)
}     
    
}
onetoNum(5)
