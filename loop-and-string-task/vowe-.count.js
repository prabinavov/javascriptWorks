//Write a program to count the number of vowels and consonants in a string.


var text = "mearnstack"

 var cocount= 0;

 var vowelcount=0;


for(let ch of text){
      if(ch=="a"|| ch=="e"|| ch=="i"|| ch=="o"|| ch=="u"){

        vowelcount++



    }
    else if(ch!=" "){
        cocount++
    }


}
    console.log(cocount);
    console.log(vowelcount);