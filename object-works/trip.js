// tripwise

var expenses={
    jazeel:780,
    nazim:680,
    arun:1000,
    mahin:500,
    amal:750,
    thushar:1500
}

var totel=0

for(let pe in expenses){

    totel+=expenses[pe]


}
console.log(totel);


var gratest=0

for(let key in expenses){

    let minprice=expenses[key]

    if(minprice>gratest){

        gratest=minprice
    }


}


for(let key in expenses){

    if(gratest==expenses[key]){

        console.log(key,expenses[key]);
        
    }

}


// individual split


var split=totel/Object.entries(expenses).length

console.log(split);


var amout=0

    for(let key in expenses){

   amout= split-expenses[key]

        console.log(key,amout);
        
     }
