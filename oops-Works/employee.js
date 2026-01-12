// employe deatils

class employe{
    setemployee(id,name,desig,salary){
        this.id=id
        this.name=name
        this.desig=desig
        this.salary=salary
    }
    displayEmploye(){
        console.log(this.id,this.name,this.desig,this.salary);
        
    }

}

emp=new employe();

emp.setemployee(333,"johnsmith","developer",300000);
emp.displayEmploye();


emp1=new employe();

emp.setemployee(444,"abu","softwarEngineer",350000);
emp.displayEmploye();