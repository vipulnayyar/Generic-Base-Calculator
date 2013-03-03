function not(num1){

num1="" +num1;

var final_ans="";

for (var i = num1.length - 1; i >= 0; i--) {

if(num1[i]=="1" )
	final_ans = "0" + final_ans;
else 
	final_ans = "1" + final_ans;





};




return final_ans;






}