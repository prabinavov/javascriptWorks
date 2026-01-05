// two pair sum

var arr=[1,2,3,4,5,6]

var target=9

var left=0

var right=arr.length-1

   while(left<right){

    let currentSum=arr[left] +arr[right]

    if(currentSum==target){

        console.log(`${arr[left]},${arr[right]}`);

        break
        
    }
    else if(currentSum<target){
        left++
    }

    else{
        right++
    }


   }