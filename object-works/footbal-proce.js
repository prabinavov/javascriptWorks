//

var football={

    brazil:5,
    argentina:2,
    portugal:0,
    urugay:2,
    spain:1,
    germany:2
}


for(let [co,cu] of Object.entries(football)){

    if(cu>1){
        console.log(co,cu);
        
    }


}