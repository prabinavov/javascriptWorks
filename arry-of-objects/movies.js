


var movies=[

    {id:1,name:"vikram",year:2022,languge:"tamil",collection:500},
    {id:2,name:"Kaththi",year:2007,languge:"tamil",collection:300},
    {id:3,name:"dhrishyam",year:2015,languge:"malayalam",collection:150},
    {id:4,name:"mersal",year:2020,languge:"tamil",collection:600},
    {id:5,name:"lucifer",year:2019,languge:"malayalam",collection:210},
    {id:6,name:"raone",year:2010,languge:"hindi",collection:450},
    {id:7,name:"kjf",year:2018,languge:"kannada",collection:1000},
    {id:8,name:"bhahubali",year:2023,languge:"telugu",collection:1200},


]
// display all movies name

var allmovies=movies.map(mo=>mo.name)

//console.log(allmovies);


//display all malayalam mobvies

var malayalammovies= movies.filter(mo=>mo.languge=="malayalam").map(mo=>mo.name)


//console.log(malayalammovies);


// display all tamil movies after 2020

var tamil2020= movies.filter(mo=>mo.languge=="tamil" && mo.year>=2020).map(mo=>mo.name)

//console.log(tamil2020);


movies.sort((m1,m2)=>m2.collection-m1.collection)

//console.log(movies);



//  heighest collected movies

var maxcollection=movies.reduce((m1,m2)=>m1.collection>m2.collection?m1:m2).collection

var maxcollection=movies.filter(mo=>mo.collection==maxcollection)

console.log(maxcollection);


