// 

var arr=[-1,0,-1,0,0,-1,0,0,-1]


//op=[-1,-1,-1,-1,0,0,0,0,0]

var newarry=[]


for(let c of arr){
    if(c<0){
        newarry.push(-1)
    }
    else{
        newarry.shift(0)
    }
}
console.log(newarry);
