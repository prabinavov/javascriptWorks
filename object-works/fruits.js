

var fruits={
    apple:250,
    mango:120,
    orange:220,
    guva:90,
    bannana:70


}
// display product whose price > 100

for(let [f,p] of Object.entries(fruits)){

    if(p>100){

        console.log(f,p);
        
    }
}

//display product available in range of 50 150

for(let [k,v] of Object.entries(fruits)){

    if(v<150 && v>50){
        console.log(k,v);
        
    }
}

// display costly product


var costlypro=Object.entries(fruits).reduce((item1,item2)=>item1[1]>item2[1]?item1:item2)

console.log(costlypro);

// display the cheapest product

var chepest=Object.entries(fruits).reduce((i1,i2)=>i1[1]<i2[1]?i1:i2)

console.log(chepest);


