// print the length of an arry

var words=["carrot","beetroot","cukkuber","soyabeen","qalyflower","beens"]

var wordlength=words.map(w=>w.length);

console.log(wordlength);


var upperWord=words.map(w=>w.toUpperCase())

console.log(upperWord);

var rrwords=words.filter(w=>w.includes("r"))

console.log(rrwords);


var largestword=words.reduce((w1,w2)=>w1.length>w2.length?w1:w2)

console.log(largestword);


console.log("sorted in index length");


words.sort((w1,w2)=>w2.length-w1.length)

console.log(words);

