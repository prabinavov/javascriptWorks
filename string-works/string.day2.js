// 

// split(delimeter) // method
//repeat(count) //  
//replace(old,new char)// first occerence only replace
//replaceAll(ella occerencum mattum)
//indexof(charecter edukkan illenggil negetive 1 varum)


var text="we will be having regular session"

var word=text.split(" ")  // always returning arry

console.log(word);


//repeat
var text="hello"

var newtext=text.repeat(3)

console.log(newtext);


//replace

var text="haii all good morning"

var newtext=text.replace("all","team")

console.log(newtext);

//replace all

var text="haii*all*goodmorning*"

var newtext=text.replaceAll("*"," ")

console.log(text);


console.log(newtext);
