// call back funstins

// a call back function ,the name of the function of any name

const callback=(n)=>{
    return n**2;

}

console.log(callback(3));



// function that takes another function  as a callback

function cube(callback,n){
    return callback(n) * n;
}
console.log(cube(callback,3));
