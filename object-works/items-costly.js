// print costly product


var vegitables={
    qaliflower:90,
    poteto:100,
    beens:70,
    kukkuber:60,
    chilly:10,
    kabege:40
}

var gratest=0

for(let veg in vegitables){

    let vergprice=vegitables[veg]

    if(gratest<vergprice){

        gratest=vergprice
    }
    
        for(let veg in vegitables){

            if( gratest==vegitables[veg])

                console.log(veg,vegitables[veg]);
                

            
        }
}
console.log(gratest);
