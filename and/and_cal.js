function and(num1,num2){

num1="" +num1;
num2="" +num2;


var ct1= new Number(0);
var ct2= new Number(0);

for (var i = 0; i < num1.length; i++) 
if (!isNaN(num1[i])) ++ct1; 

for (var j = 0; j < num2.length; j++) 
if (!isNaN(num2[j])) ++ct2;


while(ct1!=ct2)
{
	if(ct1 < ct2)
	{ num1= "0" + num1; ++ct1;  }  
	else if(ct2 < ct1)
	{ num2= "0" + num2;  ++ct2; }
}	


var final_ans="";
console.log(num1);
console.log(num2);

for (var i = 0; i < num1.length ; i++) {

if(num1[i]=="1" && num2[i] == "1")
	final_ans = "1" + final_ans;
else
	final_ans = "0" + final_ans;






};




return final_ans;






}