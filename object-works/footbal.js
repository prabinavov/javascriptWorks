//

var football={

    brazil:5,
    argentina:2,
    portugal:0,
    urugay:2,
    spain:1,
    germany:2
}


for(let v of Object.values(football)){

    console.log(v);
    
}


for(let k of Object.keys(football)){

    console.log(k);
    
}

for(let kv of Object.entries(football)){

    //console.log(kv);

    console.log(kv[0]);
    console.log(kv[1]);
    
    
}