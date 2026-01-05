
var orders={

    pizza:10,
    burger:20,
    mandhi:7,
    alfham:27,
    pepsi:25
}

var newOrderItem="burger"

var qty=2

if(newOrderItem in orders){

    orders.newOrderItem+=qty
}
else{

    orders.newOrderItem=qty
}

console.log(orders)
