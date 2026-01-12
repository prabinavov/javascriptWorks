

class Student{
    // instance initializatin - constructor() defult method (no need to create a new funtion)
    // first execute this methods and the user defined metod executes

    constructor(rollno,name,grade,total){
        this.rollno=rollno;
        this.Sname=name;
        this.sgrade=grade;
        this.stotal=total
    }
    DisplayDetails(){
        console.log(this.rollno,this.Sname,this.sgrade,this.stotal);
        
    }
}

st= new Student(33,"arjun","B",90)

st1=new Student(44,"abu","A",100)
st1.DisplayDetails()
st.DisplayDetails()