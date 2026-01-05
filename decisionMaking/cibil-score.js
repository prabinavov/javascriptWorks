// cibil score

var cibilScore= 589;


if (cibilScore>=300 && cibilScore<580 ){

    console.log("POOR");
    
}
else if(cibilScore>=580 && cibilScore<600){
    console.log("FAIR");
    
}
else if(cibilScore>=600 && cibilScore<740){
    console.log("GOOD");
    
}
else if(cibilScore>=740 && cibilScore<800){
    console.log("VERY GOOD");
    
}
else{
    console.log("invalid");
    
}