// local storage

// toget data frome to the local storage getItem(key:string)

let username =localStorage.getItem('uname')
console.log(username);

hed.innerHTML=`welcome ${username}` 


// To reomeve  the data from local storage - removeItem(key :string)

function logout(){
    localStorage.clear()
    window.location='./local.html'

}