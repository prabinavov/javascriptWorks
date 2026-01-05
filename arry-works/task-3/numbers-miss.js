//   add the missing numbers  [IMP]
//  expected op => [1,2,3,4,5,6,7,8,9]


var arr=[1,2,3,5,7,9]

//       0 1 2 3 4 5



var left=0;       
var right=left+1


while(left<arr.length-1){  

    let diffrence=arr[right]-arr[left]   // 

    if(diffrence!=1){
        console.log(`missing number is ${arr[right]-1}`);
        break
        
    }

    left++
    right++


}

