


for (let r=1;r<=5;r++){

    pattern = ""

    for(let c=1;c<=5;c++){

        if((c==1 && r==1) || (c==2 && r==1) || (c==3 && r==1)  || (c==4 && r==1)){

            pattern += "* \t"
        }
        else if((c==3 && r==2) || (c==4 && r==2) || ( c==5 && r==2)){

            pattern +="* \t"

        }
        else if((c==3 && r==1) || (c==4 && r==3) || (c==5 && r==3) || ( r==4 && c==1)){
            pattern += "*\t"
        }
    }
    console.log(pattern);
    
     
}




