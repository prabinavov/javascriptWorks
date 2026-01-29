//1. Create an object person with properties name, age, and city, console.log("name, age and city :");

var person = {

name: "abu",

age: 22,

city: "thrissur"
}

console.log("1.create an object with properties name age city");


console.log("name:", person.name);

console.log("age:", person.age);

console.log("city:", person.city);

// 2. How do you access the age property of an object using dot notat

console.log("2.access age property: ");

console.log("age:", person.age);

// 3. How do you access the city property using bracket notation?

console.log(" 3.access city property: ");

console.log("city:", person["city"]);

// 4. Add a new property email to an existing object.

console.log("4.add new property email :");

person.email = "kavya@gmail.com";

console.log(person);



// 5. Update the value of an object property.

console.log("5.update value of an object property :");

person.age += 1;

console.log(person);

// 6. Delete the age property from an object.

console.log("6.delete age property :");

delete person.age;

console.log(person);



// 7. Check whether a property phone exists in an object.

console.log("7.property phone exists or not :");

if ("phone" in person) {

console.log("phone exists");

}

else {

console.log("phone not exist");

}


// 9. Count the total number of properties in an object.

console.log("8.count total number of properties:");

var count= 0;

for(let key in person){

count++;

}

console.log(count);

// 10. Convert an object into an array of keys.

console.log("10.convert object into array of keys :");

console.log(Object.keys(person));

// 11. Convert an object into an array of values.

console.log("11.convert object into array of values :");

console.log(Object.values(person));

// 12. Convert an object into an array of key-value pairs.

console.log(" 12.convert object into array of key-value pairs :");

console.log(Object.entries(person));

// 13. Create an empty object and add properties dynamical

console.log(" 13.create empty object and add properties :");

var user = {};

user.name = "indira";

user.age = 21;

user.qualification = "btech";

console.log(user);



//15. Nest one object inside another object.

console.log("15.nest one object inside another object :");

var student = {

name: "indira",

age: 22,

roll : 47,

dept: "cse",

address : {

city: "thrissur",

state: "kerala"

}

}

console.log(student);

// 16. Use Object.keys() to display all keys of an object.

console.log("16.display all keys :");

for(let key of Object.keys(person)){

console.log(key);

}

// 17. Use Object.values() to display all values of an object

console.log("17.display all values:");

for(let value of Object.values (person)){

console.log(value);

}


// 18. Use Object.entries() to loop through keys and values. console.log("loop through keys and values :");

for(let [k,v] of Object.entries (person)){

    console.log("18.loop through key and values");
    

console.log(k,v);

}


// 27. Create a method inside an object and call it. console.log("method inside an object:");

var developer = {

name:"gulan",
age: 22,
id:333,

greet: function(){

    console.log("27.creat a methond inside an object and call it");
    console.log("Hello, welcomel gulan");

}

//28.

}

developer.greet();



var developer = {

name:"gulan",
age: 22,
id:333,

greet: function(){

    console.log("28.use this key word inside a method");
    console.log(" gulan");

}

}

developer.greet();



