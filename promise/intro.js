// pro is the object of promise class

var pro= new Promise((resolve,reject)=>{

    let lotnum =1;
    let priceNum=Math.floor(Math.random()*5);
    if(lotnum==priceNum){
        resolve("you won ")
    }
    else{
        reject("no better luck")
    }
})
pro.then(msg=>console.log(msg))
.catch(err=>console.log(err));