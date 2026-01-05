var books = [
  {
    id: 1,
    title: "Aadujeevitham (Goat Days)",
    author: "Benyamin",
    price: 350,
    genre: "Contemporary Fiction",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Indulekha",
    author: "O. Chandu Menon",
    price: 250,
    genre: "Classic Novel",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "The God of Small Things",
    author: "Arundhati Roy",
    price: 499,
    genre: "Literary Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Khasakkinte Ithihasam",
    author: "O. V. Vijayan",
    price: 320,
    genre: "Magical Realism",
    language: "Malayalam"
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 550,
    genre: "Self-Help",
    language: "English"
  },
  {
    id: 6,
    title: "Balyakalasakhi",
    author: "Vaikom Muhammad Basheer",
    price: 180,
    genre: "Romance/Tragedy",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 399,
    genre: "Classic Fiction",
    language: "English"
  },
  {
    id: 8,
    title: "Chemmeen",
    author: "Thakazhi Sivasankara Pillai",
    price: 290,
    genre: "Social Realism",
    language: "Malayalam"
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    price: 650,
    genre: "Non-Fiction/History",
    language: "English"
  },
  {
    id: 10,
    title: "Manjaveyil Maranangal",
    author: "Benyamin",
    price: 420,
    genre: "Mystery/Thriller",
    language: "Malayalam"
  }
];


//1. list all book names

var allbooks=books.map(b=>b.title)

console.log(allbooks);

//2 display all malayalam books


var allmalayalam=books.filter(b=>b.language=="Malayalam").map(b=>b.title)

console.log(allmalayalam);

//3 display all english books

var allenglish=books.filter(b=>b.language=="English").map(b=>b.title)

console.log(allenglish);

//4.display the genors of malayalam books

var malayalamgener=books.filter(b=>b.language=="Malayalam").map(bk=>bk.genre)

console.log(malayalamgener);

//5  heighest price book

var maxprice=books.reduce((b1,b2)=>b1.price>b2.price?b1:b2).price

var maxprice=books.filter(bo=>bo.price==maxprice)

console.log(maxprice);

//6.sort the bookas ascading order

books.sort((b1,b2)=>b1.price-b2.price)
console.log("sorted by acading order");

console.log(books);


//7 lits the book price grater than 300



var pricegrater= books.filter(bo=>bo.price<200)

console.log(pricegrater);

//8. list the price of all english books

var englishprice= books.filter(b=>b.language=="English").map(b=>b.price)

console.log(englishprice);

//9 list all english books  price under 500 

var englishpriceu= books.filter(b=>b.language=="English" && b.price<500).map(b=>b.price)

console.log(englishpriceu);

//10 lowest price books

var lowprice=books.reduce((b1,b2)=>b1.price<b2.price?b1:b2).price

var lowprice=books.filter(bo=>bo.price==lowprice)

console.log(lowprice);


//11 . display  how many engish and malayalam books

//var bookcount=books.filter(b=b.language=="Malayalam")



//12. sort alphabetic order

//books.sort((b1,b2)=>b1.title.localeCompare(b2.title))

//console.log(books);


//13 languge summery

var languageCount={}

for(let b of books){

  let lang = b.language

if(lang in languageCount){

  languageCount[lang]+=1
}
else{

  languageCount[lang]=1
}
}
console.log(languageCount);



// 13 most languge books count


var mostCount= Object.entries(languageCount).reduce((l1,l2)=>l1[1]>l2[1]?l1:l2)

console.log(mostCount);

// 13 most languge books count

var lestCount= Object.entries(languageCount).reduce((l1,l2)=>l1[1]<l2[1]?l1:l2)

console.log(lestCount);