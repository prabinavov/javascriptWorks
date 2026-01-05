//vowwels allatha numbers count


var text= "pneumonoultramicroscopicsilicovolcanoconiosis "

var cocount=0

for(let ch of text){

    if(ch!="a"&& ch!="e"&& ch!="i"&& ch!="o"&& ch!="u"){

        cocount++

    }
}
console.log(cocount);
