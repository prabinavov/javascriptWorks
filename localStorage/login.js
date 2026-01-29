//functon login

function login(){
    const username=document.getElementById('uname').value 
    console.log(username);
    

    //aadd user name to local storage

localStorage.setItem("uname",username)

// rederect to home
window.location='./second.html'
}
 
