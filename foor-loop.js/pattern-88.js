//




for(let r=1;r<=5;r++){

    pattern=""

    for(let c=1;c<=9;c++){

         if(r== 1 && c==5 || r==2 && c==4 || r==3 && c==3 || r==4 && c==2 || r==5 && c==1 ){
            pattern += "*\t"
        }
        else if ( (r == 2 && c == 6) || (r==3 && c==7) || (r==4 && c==8) || (r==5 && c==9) ){
            pattern += "*\t"
        }
         else if ( (r == 3 && c == 5) || (r==4 && c==6) || (r==5 && c==7) || (r==5 && c==3) || (r==4 && c==4)  || (r==5 && c==5) ){
            pattern += "*\t"
        }
        else{
            pattern +="\t"
            
        }
    }
     console.log(pattern);
}



