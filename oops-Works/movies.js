
// create a class movie [id,title,languge,gener,setmovie(),displaymovioes()]

class Movies{


    MoviesSet(id,title,languge,gener){

    this.id=id
    this.title= title 
    this.languge=languge
    this.gener=gener
    
}
 displayMovies(){
    console.log(this.id,this.title,this.languge,this.gener);
    
 }
}
var movieInstance=new Movies()

movieInstance.MoviesSet(3,"bhahubali","thelug","action")

console.log(this.id);
