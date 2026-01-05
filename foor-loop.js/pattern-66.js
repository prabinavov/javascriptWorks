




for(let r=1;r<=5;r++){
    pattern=""

    for(let c=1;c<=9;c++){
        if(r==5 || c%2!=0  && c+r==6 || c-r==4){
            pattern+="*"
        }
        else{
            pattern+="1"
        }
    }
    console.log(pattern);
    
}