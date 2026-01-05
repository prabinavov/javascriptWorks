// string  

//sequence of characters

//length  (attribute)
//toUpprcase (method)
//tolowercase
//charAt
//at
//concatinaate
//substring 
// slice
//trim
//trimStart
//trimEnd



var companyName="     Luminar Technolab"
                 01234567890123456   

console.log(companyName.toUpperCase());

console.log(companyName.toLowerCase());      

console.log(companyName.charAt(8));         //positive index only supported

console.log(companyName.at(-3));            // negetive index supporting


console.log(companyName.concat(".com,.edu"));

console.log(companyName.slice(8,17)); // taking a section of a string

console.log(companyName.slice(-3,)); //note support negetive value

console.log(companyName.substring(6,17));

console.log(companyName.substring(-3,));  //negetive value note support

console.log(`new string :${companyName.trim()}...`);

console.log(companyName.trimEnd());

console.log(companyName.trimStart());


console.log(companyName.padEnd(25,"$"));











