// 1  0  0  1
// 0  1  1  0
// 0  1  1  0
// 1  0  0  1


for(let r=1;r<=4;r++){
    let  pattern=""

    for(let c=1;c<=4;c++){
        

        if(r==c){
            pattern += "1"
        }
        else if ( (r == 4 && c == 1) || (r==1 && c==4)){
            pattern += "1"
        }
        else if ( (r==3 && c==2)  || (r==2 && c==3) ){
            pattern += "1"
        }
        else{

            pattern += "0"
        }
    }
    console.log(pattern);
    
}