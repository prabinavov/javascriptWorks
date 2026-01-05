// 

const productSales = {
  laptop: 120,
  mobile: 250,
  headphones: 400,
  smartwatch: 180,
  tablet: 90,
  camera: 60,
  printer: 45,
  keyboard: 210,
  mouse: 320,
  speaker: 150
};

//q1 => trending product
    var pro =Object.entries(productSales).reduce((item1,item2)=>item1[1]>item2[1]?item1:item2)

   // console.log(pro);

    

//q2=> product with lowest sale

 var lowpro =Object.entries(productSales).reduce((item1,item2)=>item1[1]<item2[1]?item1:item2)

  //  console.log(lowpro);

//q3 =>product with sales count > 200

var under= Object.entries(productSales).filter((item1)=>item1[1]<200)

console.log(under);


// q4 => total number of products sold

var sum= Object.entries(productSales).reduce((sum,item1)=>sum+item1[1],0)

console.log(sum);



//q5=> sort products wrt sales order by desc


var sorted=Object.entries(productSales).sort((it1,it2)=>it2[1]-it1[1])

console.log(sorted);
