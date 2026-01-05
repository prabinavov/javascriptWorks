// arry 
// if we want to store  and organize  multiple bojects with same or diffrent 


// when we go to choose arary
// keeping order
//duplicates allowed
//mutebl(means update alowed after creation)

var colors=["red","black"]

console.log(colors);




//expense

var expenses=[200,300,150,250,270,300,140,240,134,222,5000]

//             0  1   2   3   4   5   6    7   8   9   10

//dispaly all expense

console.log("itrating index method");


for(let i=0;i<expenses.length;i++){

    console.log(expenses[i]);
    
}

console.log("itrating of method");

for(let e of expenses){

    console.log(e);
    
}


console.log("total expense");

var totalexpenses=0
for(let e of expenses){

    totalexpenses+=e



}
console.log(totalexpenses);

//costly expense


console.log("costly expense");


var costlyExpense=0

for(let e of expenses){

    if(e>costlyExpense){
        costlyExpense=e
    }

}
console.log(costlyExpense);


console.log("minimum expense");

var miniexp=expenses[0] // we assumed 0 th index is mnimum expense  and compare it that

for(let e of expenses){

    if(e<miniexp){
        miniexp=e
    }
}
console.log(miniexp);







