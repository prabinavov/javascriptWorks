
var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

// unpaid student names

for (let [k,v] of Object.entries(expenses)){

    if (v==0){
        console.log(k);
        
    }

}

// paid students

var paid=Object.entries(expenses).filter(arr=>arr[1]!=0)

    console.log(paid);
    
// display students who paid >250


var whoPaid=Object.entries(expenses).filter(arry=>arry[1]>250)

console.log(whoPaid);



// total expenses


//var totel=Object.entries(expenses).reduce((arry1[1],arry2[2])=>arry1[1]+arry2[1],0) 

//console.log(totel);


var totel=Object.values(expenses).reduce((sum,e)=>sum+e,0) 

console.log(totel);


//individual split


var split=totel/Object.entries(expenses).length

split=Math.round(split)

console.log(split);

var amout=0

    for(let key in expenses){

   amout= split-expenses[key]

        console.log(key ,amout);
        
     }


     var splitwise={} // creating new object 


     for(let [k,v] of Object.entries(expenses)){  // take each values and keys

        splitwise[k]=split-v // set split wise in old keys and split -  v
     }
     console.log(splitwise);
     

     