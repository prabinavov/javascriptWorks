//📍TASK 23 || ProgrammingLan || 09-01-2026

const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
    
  ];

 // Q1: Print the names of all programming languages in the array.
 console.log(programmingLanguages.map(m=>m.name));
 
 // Q2: Print the total number of programming languages in the array.
 var count=0

 programmingLanguages.map(l=>l.name==count++)

    console.log("2.total nujmber of programming languguges");
    
     console.log(count);
 
  //Q3: Print the languages that are popular.
console.log("3.popular langunges");

  console.log(programmingLanguages.filter(p=>p.popular));
  
  //Q4: Print the names of the languages created after the year 2000.
  console.log("4.year created after 2000");
  

  console.log(programmingLanguages.filter(p=>p.yearCreated>2000));
  
  //Q5: Print the languages that are both functional and object-oriented.
  console.log("5.fuctional and object-oriented");
  

  console.log(programmingLanguages.map(p=>p.paradigms).filter(p=>p.paradigms=="Object-oriented" ));
  
  //Q6: Print the names of the creators of the languages.

  console.log(programmingLanguages.map(c=>c.creator));
  
  //Q7: Print the names of languages that have "Script" in their name.

  console.log(programmingLanguages.filter(n=>n.name=="Script"));
  
  //Q8: Print the names of programming languages that were created before the year 1995.
    console.log(programmingLanguages.filter(p=>p.yearCreated<1995));


  //Q9: Print the names of programming languages that support more than two paradigms.

 // programmingLanguages.map(p=>p.paradigms);

  //for(let c of paradigms){
    
  //}
  

  //Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.

  console.log(programmingLanguages.reduce((l1,l2)=>l1.yearCreated<l2.yearCreated?l1:l2));
  
  