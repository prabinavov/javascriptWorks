// count the totel number of properties ina an object

var student={
    name:"mubarak",
    age : 33,
    course: "python",
    adress:"vadakkan veed"

}

var cout=0

for(let p in student){

    cout++

}
console.log(cout);
