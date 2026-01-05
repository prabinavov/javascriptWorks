// fibocci number

var limit=8; // limit=8   0,1,1,2,3

var prev= 0; // prev= 0; start =0


var curr= 1; // curret=1

console.log(prev); // 0
console.log(curr);// 1

for(i=3;i<=limit;i++){ // 

    next=prev+curr;
    console.log(next);
    

    prev=curr;
    curr=next;
    
    

}





