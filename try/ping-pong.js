// if num is divui 3 ping
// if num is didvi 5 pong
// if num is didvi by 15 ping pong

var num=30;

if(num%15==0){
    console.log("pingpong");
    
}
else if(num%5==0){
    console.log("pong");
    
}
else if(num%3==0){
    console.log("ping");
    
}
else{
    console.log("error");
    
}