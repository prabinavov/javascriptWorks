


for(r=1;r<=3;r++){
    pattern=""

    for(c=1;c<=5;c++){

        if((r+c==4) ||  (c-r==2)){
            pattern+="*"
        }
        else if(r==3){
            pattern+="*"
        }
        else{
            pattern+=" "
        }
        
    }
    console.log(pattern);
    
}
