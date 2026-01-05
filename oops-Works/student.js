//  

class Student{


    studentSet(namee,roll,dept){
     
    this.namee= namee 
    this.roll=roll
    this.dept=dept
    
}
 displayStudent(){
    console.log(this.namee,this.roll);
    
 }
}
var abuInstance=new Student()

abuInstance.studentSet("abu",33,"civil")

console.log(this.namee,this.roll);



    

    
