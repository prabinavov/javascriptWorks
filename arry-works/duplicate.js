
// displ;ay duplicates number of arry  [IMP]


var arr=[10,11,11,12,12,13,14,15]
    //    0 1  2  3   4  5  6

var left=0

var right=left+1

while(left<arr.length-1){  

    let diffrence=arr[right]-arr[left]   // 

    if(diffrence==0){
        console.log(`duplicate number is ${arr[right]}`);
    
    }

    left++
    right++


}



