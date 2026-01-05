
var loan = 20000;   
var intrestrate = 10;            
var duration = 12;       


var monthlyRate = intrestrate / (12 * 100);


var x = (1 + monthlyRate)** duration;
var emi = (loan * monthlyRate * x) / (x - 1);

console.log("EMI =", emi.toFixed(2));