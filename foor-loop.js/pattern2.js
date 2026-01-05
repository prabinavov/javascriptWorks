// 0   E  0  E
// 0   E  0  E
// 0   E  0  E

for(let r=1;r<=3;r++){

    var pattern=""

    for(let c=1;c<=4;c++){

        if(c==2  || c==4){

            pattern=pattern+="E"
        }
        else{
            pattern=pattern+"O"
        }

    }

    console.log(pattern);
}