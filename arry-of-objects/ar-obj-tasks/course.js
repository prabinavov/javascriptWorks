//Task 17 || Course dataset || 31-12-2025

var courses = [
  { id: 1, title: "HTML Basics", instructor: "John Doe", price: 999, category: "Web Development", duration: "10 hrs", level: "Beginner" },
  { id: 2, title: "CSS Mastery", instructor: "Jane Smith", price: 1299, category: "Web Development", duration: "12 hrs", level: "Beginner" },
  { id: 3, title: "JavaScript Fundamentals", instructor: "Alex Brown", price: 1799, category: "Web Development", duration: "20 hrs", level: "Beginner" },
  { id: 4, title: "Advanced JavaScript", instructor: "Alex Brown", price: 2499, category: "Web Development", duration: "25 hrs", level: "Advanced" },
  { id: 5, title: "React JS", instructor: "Emily White", price: 2999, category: "Frontend", duration: "30 hrs", level: "Intermediate" },
  { id: 6, title: "Node.js", instructor: "Michael Green", price: 2799, category: "Backend", duration: "28 hrs", level: "Intermediate" },
  { id: 7, title: "Express.js", instructor: "Michael Green", price: 1999, category: "Backend", duration: "18 hrs", level: "Intermediate" },
  { id: 8, title: "MongoDB Basics", instructor: "Sarah Lee", price: 1599, category: "Database", duration: "15 hrs", level: "Beginner" },
  { id: 9, title: "MySQL Complete Guide", instructor: "David Clark", price: 1899, category: "Database", duration: "22 hrs", level: "Beginner" },
  { id: 10, title: "Python for Beginners", instructor: "Rachel Adams", price: 1699, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 11, title: "Data Structures in Python", instructor: "Rachel Adams", price: 2299, category: "Programming", duration: "25 hrs", level: "Intermediate" },
  { id: 12, title: "Java Basics", instructor: "Robert King", price: 1899, category: "Programming", duration: "24 hrs", level: "Beginner" },
  { id: 13, title: "Spring Boot", instructor: "Robert King", price: 2999, category: "Backend", duration: "32 hrs", level: "Advanced" },
  { id: 14, title: "C Programming", instructor: "Linda Scott", price: 1399, category: "Programming", duration: "18 hrs", level: "Beginner" },
  { id: 15, title: "C++ Fundamentals", instructor: "Linda Scott", price: 1599, category: "Programming", duration: "20 hrs", level: "Beginner" },
  { id: 16, title: "Machine Learning", instructor: "Andrew Miller", price: 3999, category: "AI", duration: "40 hrs", level: "Advanced" },
  { id: 17, title: "Deep Learning", instructor: "Andrew Miller", price: 4599, category: "AI", duration: "45 hrs", level: "Advanced" },
  { id: 18, title: "UI/UX Design", instructor: "Sophia Wilson", price: 2499, category: "Design", duration: "26 hrs", level: "Intermediate" },
  { id: 19, title: "Figma Essentials", instructor: "Sophia Wilson", price: 1799, category: "Design", duration: "16 hrs", level: "Beginner" },
  { id: 20, title: "Cyber Security Basics", instructor: "Daniel Perez", price: 2199, category: "Security", duration: "22 hrs", level: "Beginner" },
  { id: 21, title: "Ethical Hacking", instructor: "Daniel Perez", price: 3499, category: "Security", duration: "35 hrs", level: "Advanced" },
  { id: 22, title: "Cloud Computing", instructor: "Emma Turner", price: 2899, category: "Cloud", duration: "28 hrs", level: "Intermediate" },
  { id: 23, title: "AWS Fundamentals", instructor: "Emma Turner", price: 3199, category: "Cloud", duration: "30 hrs", level: "Intermediate" },
  { id: 24, title: "DevOps Basics", instructor: "Oliver Brown", price: 2699, category: "DevOps", duration: "26 hrs", level: "Intermediate" },
  { id: 25, title: "Docker & Kubernetes", instructor: "Oliver Brown", price: 3799, category: "DevOps", duration: "34 hrs", level: "Advanced" }
];

//1. Create a new array containing only course titles.
coursetitle = courses.map(m=>m.title)

console.log("1.only couse title");

console.log(coursetitle);



//2. Find all courses taught by "Alex Brown".

throught= courses.filter(c=>c.instructor=="Alex Brown")

console.log("2.throughted by alex Brown");

console.log(throught);




//3. Find all courses whose duration is more than 25 hrs.

duration = courses.filter(d=>d.duration<25)

console.log("3.duration more tahan 25");

console.log(duration);


//4. Create a new array with title and duration only.

DurationTitles=courses.map(c=>({title:c.title,duration:c.duration}))

console.log("4.title and duration ");

console.log(DurationTitles);

//5. Find all courses where the level is "Beginner".

levelbigginer=courses.filter(b=>b.level=="Beginner")

console.log("5.level is bigginer");

console.log(levelbigginer);


//6. Sort the courses by duration (ascending order).

durationSort=courses.sort((l1,l2)=>l2-l1)
console.log("6.sorting duration");


console.log(durationSort);

//7. Sort the courses by level (Beginner → Intermediate → Advanced).


var levels={
    bigginer :1,
    intermediate :2,
    advanced:3


}

var sorted=courses.sort((l1,l2)=>levels[l1.level]-levels[l2.level])

console.log("7.sorted by levels");

console.log(sorted);

//8. Find all courses in the "Backend" category.
 backed=courses.filter(c=>c.category=="Backend")

 console.log("8.backed categories");

 console.log(backed);
 
 
//9. Find the average price of all courses.
var totelprice=courses.reduce((total,c)=>total+c.price,0)
//console.log(totelprice);

var average=totelprice/courses.length

console.log("9.average price of  all course");

console.log(average);


//10. Count how many courses belong to each level.

var levels={}

//11. Find the most expensive course price.

mostexpensive=courses.reduce((c1,c2)=>c1.price>c2.price?c1:c2)

console.log("11.most expensive course");

console.log(mostexpensive);

//12. Create a new array with title and price of each course.
titleandprice= courses.map(c=>({title:c.title,price:c.price}))

console.log("12.title and price ");

console.log(titleandprice);

//13. Find the total number of courses in each category.

var categories={}


//14. Sort the courses by price (low to high).
var sortingprice=courses.sort((c1,c2)=>c1.price-c2.price)
console.log("14.sortingprice");

console.log(sortingprice);

//15. Find the total price of all courses.

 var priceTotal= courses.reduce((total,c)=>total+c.price,0)

 console.log("15.total price of all coures");

 console.log(priceTotal);
 
 
//16. Sort the courses by price (high to low).
var sortingprice=courses.sort((c1,c2)=>c2.price-c1.price)
console.log("16.sortingprice high to low");

console.log(sortingprice);

//17. Create a new array showing title and instructor name.

titleandnIstructor= courses.map(c=>({title:c.title,price:c.instructor}))

console.log("17.title and instructor");

console.log(titleandnIstructor);

//18. Find all courses with price greater than 2500.
var pricegrater=courses.filter(p=>p.price>2500)

console.log("18.price grater 2500");

console.log(pricegrater);


//19. Create a new array of course titles in uppercase.
var courseUpper=courses.map(c=>c.title.toLocaleUpperCase())

console.log("19.title to uppercase");

console.log(courseUpper);


//20. Sort the courses by title (alphabetical order).

sortapha=courses.sort((c1,c2)=>c1.title.localeCompare(c2.title))

console.log("20. sort by title alphabetic order");


console.log(sortapha);
