//ping if the number is /by 3
//pong if the number is /by 5
//pingpong if the number is / by 15
//other vise invalid

var num= 4;

 if (num%15==0){  // 4/15==0  false
    console.log("pingpong");
    
}
else if (num%5==0){  //4/5==0 false
    console.log("pong"); 
    
}
else if (num%3==0){   // 4/3==0 false
    console.log("ping");
    

}
else{ 
    console.log("invalid");  // statement print
    
}
