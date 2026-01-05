
//6 count how many numbers are less then the average value

let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

let total=numbers.reduce((n1,n2)=>n1+n2)

//console.log(total);

let average=total/numbers.length

//console.log(average);

let avgvalue=numbers.filter(num=>num<average)

//console.log(avgvalue);

let valueCount=avgvalue.length

console.log(valueCount);
