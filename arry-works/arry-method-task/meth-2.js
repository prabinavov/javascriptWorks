// find the sum of even index position

let numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


let evenindex=numbers.filter((num,index)=>index%2==0)
console.log(evenindex);


let sum=evenindex.reduce((n1,n2)=>n1+n2)
console.log(sum);





