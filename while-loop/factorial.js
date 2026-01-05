

var num= 6;

var fact=1;

var i=1;


while(i<=num){   // 1<=6 T 2<=6 3<=6 4<=6 5<=6 T 6<=6 T 7<6

    fact=fact*i;  //fact=1*1=1 fact= 1*2=2 2*3=6 6*4=4 24*5= 120 120*6=720

    i++; //2,3,4,5,6
}
console.log(`the factorial of ${num} is ${fact}`);
