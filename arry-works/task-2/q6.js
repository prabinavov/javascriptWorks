//Write a program to find the smallest element in an array.




var numbers=[2,3,5,5,6,6,7,7,7,8]


var smallest=numbers[0]

for(let n of numbers){

    if(n<smallest){
        smallest=n
    }
}
console.log(smallest);
