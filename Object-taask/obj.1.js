// create an object with person with properties with name ,age,and city

//Task 17 || array Object || 30-12-2025

var movies = [
  {
    id: 1,
    title: "Drishyam",
    director: "Jeethu Joseph",
    price: 250,
    genre: "Thriller",
    language: "Malayalam"
  },
  {
    id: 2,
    title: "Premam",
    director: "Alphonse Puthren",
    price: 200,
    genre: "Romance",
    language: "Malayalam"
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    price: 450,
    genre: "Science Fiction",
    language: "English"
  },
  {
    id: 4,
    title: "Interstellar",
    director: "Christopher Nolan",
    price: 500,
    genre: "Sci-Fi/Drama",
    language: "English"
  },
  {
    id: 5,
    title: "Bangalore Days",
    director: "Anjali Menon",
    price: 300,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 6,
    title: "Lucifer",
    director: "Prithviraj Sukumaran",
    price: 350,
    genre: "Action/Thriller",
    language: "Malayalam"
  },
  {
    id: 7,
    title: "Charlie",
    director: "Martin Prakkat",
    price: 280,
    genre: "Romance/Drama",
    language: "Malayalam"
  },
  {
    id: 8,
    title: "Joker",
    director: "Todd Phillips",
    price: 420,
    genre: "Psychological Thriller",
    language: "English"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    director: "Anthony Russo, Joe Russo",
    price: 550,
    genre: "Action/Fantasy",
    language: "English"
  },
  {
    id: 10,
    title: "KGF: Chapter 1",
    director: "Prashanth Neel",
    price: 380,
    genre: "Action",
    language: "Kannada"
  },
  {
    id: 11,
    title: "Bahubali: The Beginning",
    director: "S. S. Rajamouli",
    price: 480,
    genre: "Epic/Fantasy",
    language: "Telugu"
  },
  {
    id: 12,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    price: 400,
    genre: "Drama",
    language: "English"
  },
  {
    id: 13,
    title: "Titanic",
    director: "James Cameron",
    price: 370,
    genre: "Romance/Drama",
    language: "English"
  },
  {
    id: 14,
    title: "Uyare",
    director: "Manu Ashokan",
    price: 260,
    genre: "Drama",
    language: "Malayalam"
  },
  {
    id: 15,
    title: "Minnal Murali",
    director: "Basil Joseph",
    price: 320,
    genre: "Superhero/Fantasy",
    language: "Malayalam"
  }
];



//1. Display all movie titles using map().

var allmovies=movies.map(t=>t.title)

console.log("1.all movies name");

console.log(allmovies);


//2. Find all movies where the language is "Malayalam".

var langugeml=movies.filter(m=>m.language=="Malayalam").map(t=>t.title)
console.log(" 2.malayalam movies");

console.log(langugeml);

//3. Find all movies with a price greater than 300.

var pricegrater=movies.filter(m=>m.price>300)
console.log("3.movies price grater than 300")
console.log(pricegrater);


//4. Display the title and director of all English movies.

var englishTitle=movies.filter(m=>m.language=="English").map((t=>t.title) && (d=>d.director))

console.log("4.all englis movies title and director");

console.log(englishTitle);


//5. Find the total price of all movies using reduce().

var totelprice=movies.reduce((t,m)=>t+m.price,0)

console.log("5.totel price of all movies");

console.log(totelprice);


//6. Find the average price of all movies.

var averagePrice=totelprice/movies.length

console.log("6.average price of all movies");

console.log(averagePrice);


//7. Find the movie with the highest price.


var hightestPrice=movies.reduce((m1,m2)=>m1.price>m2.price?m1:m2)

console.log("7.highest priced movie");


console.log(hightestPrice);



//8. Find the movie with the lowest price.
var lowtestPrice=movies.reduce((m1,m2)=>m1.price<m2.price?m1:m2)

console.log("8.lowest priced movie");


console.log(lowtestPrice);

//9. Find all movies directed by Christopher Nolan.

var findAll=movies.filter(m=>m.director=="Christopher Nolan")

console.log("9.Christopher Nolan movies");


console.log(findAll);

//10. Count how many movies are in English and how many are in Malayalam.

console.log("10.malayalam and english movies count");

var count = {}

for(let m of movies){

    let lang = m.language;

    if(lang=="English" || lang=="Malayalam"){

    if(lang in count) {

        count [lang] += 1;

    }

    else{

        count[lang] = 1;

    }

    }

}

console.log(count);

//11. Sort the movies by price in ascending order.

 
var sort=movies.sort((m1,m2)=>m1.price-m2.price)

console.log("11.sorted by price");


console.log(sort);




//12. Sort the movies by title in alphabetical order.

var lettersort=movies.sort((m1,m2)=> m1.title.localeCompare(m2.title)).map(m=>m.title)

console.log("12.sorted movies alphabetical order");


console.log(lettersort);

//13. Find the first movie that belongs to the genre "Thriller".
var generfirst=movies.filter(m=>m.genre.includes("Thriller"))
console.log("13.thriller movies");


console.log(generfirst);

//14. Create a new array containing only movie titles and prices.

//15. Check whether any movie price is below 200 (use some()).

var pricebelow=movies.filter(m=>m.price<=200)

console.log("15.price below 200");


console.log(pricebelow);
