function store(){
const carName=document.getElementById('brand').value
const price=document.getElementById('prices').value
const key=document.getElementById('keys').value

    if (carName=="" || price=="" || key=="") {
        alert("Enter all fields")
        
    }

     car={
        brand:carName,
        price:price,
        key:key
    }

    if (car.key in localStorage) {
        alert("Already exists")
        
    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car))
        alert("Car details added")
        brand.value=""
        prices.value=""
        keys.value=""
    }

}

function retrieve(){

    let key1=retrieveKey.value
    console.log(key1);

    let car=JSON.parse(localStorage.getItem(key1))

    result.innerHTML=`
    <div class="bg-white p-5 mt-5 rounded-xl border">
        <h1>Car Details</h1>
        <ul>
            <li>${car.brand}</li>
            <li>${car.price}</li>

        </ul>
    </div>
    `
    retrieveKey.value=""
    

}

function remove(){
    let key2=removeKey.value
    if (key2 in localStorage) {
        localStorage.removeItem(key2)
        alert("Car details Removed")
        removeKey.value=""
        
    }
    else{
        alert("Invalid key")
    }
    result.innerHTML=``
}


function clearAll(){
    localStorage.clear()
    result.innerHTML=``
}
    