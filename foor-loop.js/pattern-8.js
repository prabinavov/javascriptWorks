

for (let r=5;r>=1;r--){

    let pattern=""

    //space

    for(let space=1;space<=5-r;space++){
        pattern+=" "
    }
    // astrick

    for(let c=1;c<=r;c++){
        pattern+="* "
    }
    console.log(pattern);
    
}