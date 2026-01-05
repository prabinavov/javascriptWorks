//find the totel sum after removin less then 10

let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


let remove=numbers.filter(num=>num>=10)

//console.log(remove);

let sum=remove.reduce((n1,n2)=>n1+n2)

console.log(sum);
