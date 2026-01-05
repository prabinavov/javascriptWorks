

var expenses = [
  { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
  { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
  { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
  { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
  { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];


//1 owners summery

var ownerex={}

for(let t of expenses){

    let owner = t.owner

    let amount= t.amount

    if(owner in ownerex){

        ownerex[owner]+=amount
        

    }
    else{

        ownerex[owner]=amount
    }
}
console.log(ownerex);



// 2 costly transaction

var costlytrasaction=expenses.reduce((t1,t2)=>t1.amount>t2.amount?t1:t2)

//console.log(costlytrasaction);


3//cash transactions

var cashTransactions=expenses.filter(t=>t.payment_method=="cash")

//console.log(cashTransactions);


// 4 trasaction method >1000

var amoutgrater=expenses.filter(t=>t.amount>1000)

console.log(amoutgrater);


//5  totel expenses

var totelexpenses=expenses.reduce((a,t)=>a+t.amount,0)

console.log(totelexpenses);


//6 most used payment method

var paymentMethCout={}

for(let t of expenses){

    let type=t.payment_method

    if( type in paymentMethCout){
        paymentMethCout[type]+=1
    }

    else{
        paymentMethCout[type]=1
    }
}
console.log(paymentMethCout);


//7 how much amount  spend sara in foods 

var saraFood=expenses.filter(t=>t.owner=="sarah" && t.category=="food").reduce((s,t)=>s+t.amount,0)

console.log(saraFood);


//8 priority summery

var prioritysum={}

for(let p of expenses){

    let prio=p.priority

    let sum=p.amount

    if(prio in prioritysum){

        prioritysum[prio]+=sum
    }
    else{
        prioritysum[prio]=sum
    }
}
console.log(prioritysum);


//9. jazeel trasaction


var jazeeltransa=expenses.filter(t=>t.owner=="jazeel")

console.log(jazeeltransa);



//10. heightest paid category


var heightestpaid={}


for(let t of expenses){

    let cat=t.category
    let amo=t.amount

    if(cat in heightestpaid){
        heightestpaid[cat]+=amo
    }
    else{
        heightestpaid[cat]=amo
    }
}
console.log(heightestpaid);

var sortedcat=Object.entries(heightestpaid).sort((c1,c2)=>c2[1]-c1[1])

console.log(sortedcat);


//q11=>priority summary wrt owner

var ownreSummery={}

for(let t of expenses){
    let owner =t.owner
    let amount=t.amount
    let priority=t.priority

    if(owner in ownreSummery){
        ownreSummery[owner][priority]+=amount

    }
    else{
        if(priority=="need"){
            ownreSummery[owner]={"need":amount,"want":0}
        }
        else{
            ownreSummery[owner]={"need":0,"want":amount}
        }
    }
        
}
console.log(ownreSummery);


//q12=>payment methods


let paymentmeth={}


for(let p of expenses){

    paymeth=p.payment_method


        if(paymeth in paymentmeth){
            paymentmeth[paymeth]+=1
        }
        else{
            paymentmeth[paymeth]=1
        }
    
}
console.log(paymentmeth);
