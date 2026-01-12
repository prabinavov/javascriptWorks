//  map()
//  filter()
//  reduce()
//  sort()



//map

var numbers=[2,3,4,5,6,7,8,9,8]

console.log(`numbers${numbers}`);


// add five
console.log("add five of numbers");

var addfive=numbers.map(num=>num+5)

console.log(addfive);


//asqare 
console.log("sqare of numbers");

var square=numbers.map(num=>num**2)

console.log(square);

// qubes

console.log("qube of numbers");


var qube=numbers.map(num=>num**3)

console.log(qube);




// filter

/* var numbers=[10,11,12,13,14,15,16,17,18,]


 var GtTherteen=numbers.filter(num=>num>13)

 console.log(GtTherteen);
 

 //odd or even

 var odd=numbers.filter(num=>num%2!=0)

 console.log(`odd in this arry${odd}`);

 // eevn numbers

 var even=numbers.filter(num=>num%2==0)

 console.log(`even numbers is ${even}`);
 
 */


 /*var words=["beautiful","wonderful","meaningful","powerful","homefull"]


 var upperWords=words.map(w=>w.toUpperCase())

 console.log(upperWords);
 

 // words ending with "ful"


 var endingful=words.filter(w=>w.endsWith("full"))

 console.log(endingful);

 */


// reduce

 /*var num=[2,3,4,5,6,8,8,5]

 console.log("sum of this numbers");
 
 var sum=num.reduce((n1,n2)=>n1+n2)

 console.log(sum);


 //max number 
  console.log("max of this numbers");


 var maxnum=num.reduce((n1,n2)=>n1>n2?n1:n2)

 console.log(maxnum);

 // min numbve

 var minnumber=num.reduce((n1,n2)=>n1<n2?n1:n2)

 console.log(minnumber);

 */


 var number=[3,3,1,2,3,4,8,9,5,7]


 number.sort((n1,n2)=>n2-n1)

 console.log(number);
 

 number.sort((n1,n2)=>n1-n2)

 console.log(number);
 


 
 


 
 


