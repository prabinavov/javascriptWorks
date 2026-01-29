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

  //Q1: Print the names of all programming languages in the array.

  var allLanguge=programmingLanguages.map((m1)=>m1.name)

  console.log("1.print the name of all programming lanfguges");
  

  console.log(allLanguge);
  
  //Q2: Print the total number of programming languages in the array.

  var totelnum=programmingLanguages.length

  console.log("2.totel number of proggrammin languges");
  

  console.log(totelnum);
  
  //Q3: Print the languages that are popular.

  var popular=programmingLanguages.filter(p=>p.popular)

  console.log("3.popular languages");

  console.log(popular);
  
  

  //Q4: Print the names of the languages created after the year 2000.

  var after=programmingLanguages.filter(p=>p.yearCreated>2000)


  console.log("4.after 2000 year created");

  console.log(after);
  
  
  //Q5: Print the languages that are both functional and object-oriented.

  //var boath=programmingLanguages.filter()


  //Q6: Print the names of the creators of the languages.

  var creator=programmingLanguages.map(c=>c.creator)

  console.log("6.name of all creators");

  console.log(creator);
  
  
  //Q7: Print the names of languages that have "Script" in their name.

  //var nameScript=programmingLanguages.filter()



  //Q8: Print the names of programming languages that were created before the year 1995.

  var creatorbefor=programmingLanguages.filter(c=>c.yearCreated<1995).map(c=>c.name)

  console.log("8.before created the year 1995");

  console.log(creatorbefor);
  
  
  //Q9: Print the names of programming languages that support more than two paradigms.

  var morethan=programmingLanguages.filter(p=>p.paradigms.length).map(p=>p.name)

  console.log("9.more than 2 pedigree");
  

  console.log(morethan);
  
  //Q10: Print the oldest programming language (language with the earliest yearCreated) in the array.


  var oldlanguge=programmingLanguages.reduce((old,current)=>current.yearCreated<old.yearCreated?current:old)

  console.log("10.oldest languge");
  


  console.log(oldlanguge);
  