// student details

class Stdents{

    setStudent(rollno,name,departmet){
        this.srollno=rollno
        this.sname=name
        this.sdepartmet=departmet

    }
    displayStudents(){
        console.log(this.srollno,this.sname,this.sdepartmet);
        
    }

}
stu =new Stdents();

stu.setStudent(3,"arjun","civil")

stu.displayStudents()

