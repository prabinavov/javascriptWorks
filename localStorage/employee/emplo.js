//local storage


username=localStorage.getItem('username')
head1.inner.HTML=`welcome ${username}`


//to add employee detail to the local stioragw

function addEmployee(){
    employee={
        id:Empid.value,
        name:Empname.value,
        addr:EmpAdd.value,
        desig:Empdesig.value,
        exp:empExp.value,
        salary:empsala.value,
        sear:search.value
    }
    console.log(employee);
    
    if(employee.id in localStorage){
        alert("aldredy exist")

    }else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee details created")
        Empid.value=""
        Empname.value=""
        EmpAdd.value=""
        Empdesig.value=""
        empExp.value=""
        empsala.value=""
        search.value=""

    }

}

// searching

function search(){
    let key=emp.value
    let employee=JSON.parse(localStorage.getItem(key))

    result.innerHTML=`<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${employee.id}</li>
    <li class="list-group-item">${employee.name}</li>
    <li class="list-group-item">${employee.addr}</li>
    <li class="list-group-item">${employee.desig}</li>
    <li class="list-group-item">${employee.exp}</li>
        <li class="list-group-item">${employee.salary}</li>



  </ul>
 
</div>`
}