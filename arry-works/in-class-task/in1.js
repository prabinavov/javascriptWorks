//Create a new array containing the square of each number.




var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var sqare=numbers.map(n=>n*2)

//console.log(sqare);



//2.Create a new array containing numbers less than 10.
var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var lessthen=numbers.filter(n=>n<10)

    //console.log(lessthen);
    
//3.Find the average of all numbers.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var average=numbers.reduce((n1,n2)=>n1+n2/numbers.length)

   // console.log(average)
    


//console.log(average);



//Find the smallest number in the array.


//ar smallest=numbers.maps(n=>n)


//5. Create a new array containing only odd numbers.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


var oddnum=numbers.filter(n=>n%2!=0)

//console.log(oddnum);


//6.Sort the array and display the third smallest number.





// 7.Create a new array by subtracting 2 from each number.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


var sub2=numbers.map(n=>n-2)

//console.log(sub2);


// 8 Find the sum of only even numbers.


var even=numbers.filter(n=>n%2==0)

        var evensum=even.reduce((n1,n2)=>n1+n2)

    
 //       console.log(evensum);



//9.Count how many numbers are greater than the average value.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

var averagevalue=numbers.reduce((n1,n2)=>n1>average?n1:n2)

//console.log(averagevalue);


// 10.Create a new array containing numbers divisible by 5.


var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

//var divisible5=numbers.filter(n1=>n1%5==0)

//console.log(divisible5);

//11  Sort the array based on descending order and display the first element.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

     //numbers.sort((n1,n2)=>n2-n1)
    // console.log(numbers);
     

// 12. Create a new array by converting each number to a string.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];

//var array=numbers.map(num=>num.toString())

//console.log(array);


//13.Find the difference between the maximum and minimum values.
var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


var maximum=numbers.reduce((n1,n2)=>n1<n2?n2:n1)

//console.log(maximum);


var minimum=numbers.reduce((n1,n2)=>n1<n2?n1:n2)

//console.log(minimum);


//console.log(`diffrence ${maximum-minimum}`);



//14.Sort the array and find the second highest value.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


numbers.sort((n1,n2)=>n1-n2)

var secondheight=numbers.filter(maximum)

//console.log(numbers);


//15/Check whether all numbers are greater than 5.

var numbers = [12, 5, 20, 8, 15, 30, 7, 25, 10, 18];


var check=numbers.reduce((n1,n2)=>n1>5?true:false)

//console.log(check);








        
        
        
    




