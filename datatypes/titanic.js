

var malePassengers=869;

var femalePassengers=412;

var survived=492;

//totel num of passsngers

//numberof unsurvived passengers


var totelnum = malePassengers + femalePassengers;
console.log(totelnum);


var unsurvivedpassengers = totelnum - survived;
console.log(unsurvivedpassengers);

var survivedpersontage = (survived/totelnum)*100;
console.log(survivedpersontage);

var unsurvivedPercentage = (unsurvivedpassengers/totelnum)*100;
console.log(unsurvivedPercentage);




