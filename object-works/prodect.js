// product --with code,title,price,color


var product={

    "code":333,
    "title":"watch",
    "price":2999,
    "color":"black"
}

console.log(product.code);
console.log(product.color);



// check attriburte ius exiist or not

// using  attri "in" object name =>  true /false


/*if("offer" in product){
    console.log("exist");
    
}
else{
    console.log("not exist");
    
}*/


// update the price  add+ 2000

product.price+=2000

console.log(product);



// add nwe property qty as 10 if qty not exist else update qty as 
// curret qty + 10

if("qty" in product){

    product.qty+=10
}
else{

    product.qty=10
}

console.log(product);


