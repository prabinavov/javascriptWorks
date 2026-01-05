//



var colors=["red","black","black","red","yellow","green","black","purple","voilet","orange"]


var ccount={}  // create a oject empty

for(let c of colors){  // take each values

    if(c in ccount){  // if value in ccount

        ccount[c]+=1  // update the ccount +1
    }
    else{  // allengil

        ccount[c]=1  // add c in ccount
    }
}
console.log(ccount);
