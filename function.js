function operation(no){


			switch(no)
			{


			case "convert": convert_init();
			  break;


			case "add": add_init();  
			  break;

			case "subtract": subtract_init();
			  break;

			case "multiply": multiply_init();
			  break;

			case "divide": divide_init();
			  break;

			case "and": and_init();
			  break;      

			case "or": or_init();
			  break;

			case "not": not_init();
			  break;    

			default: convert_init();



			}


}

/*  -----------  Enter no in textbox on button click  ----------------------------------   */

function number(num,id){

if(id=='1')
$("#field1").val($("#field1").val()+list[num]);
else
$("#field2").val($("#field2").val()+list[num]);


}





/*  ---- Generating buttons for different nos used for a specific base --------------------------  */
function button_html_1(base) {

				var html="";
				html= html+"<textarea id =\"field1\" style=\"width: 95%;\"></textarea>";
				html= html+"<br/> ";

				for (var i = base-1; i >= 0; i--) {
				html=html+"<button id=\"" + i + "\" class=\"button\" onclick=\"number(\'" + i + "\' , \'1\' );\" >" + i + "</button>";
				};

				html=html+"";

				return html;

}


function button_html_2(base) {

				var html="";
				html= html+"<textarea id =\"field2\" style=\"width: 95%;\"></textarea>";
				html= html+"<br/> <div id=\"button\" >";

				for (var i = base-1; i >= 0; i--) {
				html=html+"<button id=\"" + i + "\" class=\"button\" onclick=\"number(\'" + i + "\' , \'2\' );\" >" + i + "</button>";
				};

				html=html+"</div>";

				return html;

}

/*---------------------------------- Determining sign of the number -------------------------------------  */



function sign(num){

num ="" + num;
var sign ="";
var num_detail = new Array();

if(num[0]=="-")
{	
	sign ="-ve";
	num = num.substr(1);

}else{

	sign ="+ve";
	if(num[0]=="+")
	num = num.substr(1);

}

num_detail[0] = sign;



if(num.indexOf(".") > -1)
{
int_num = num.substr(0,num.indexOf("."));
frac_num = num.substr(num.indexOf(".")+1);
}
else
{
int_num = num;
frac_num= "";
}

num_detail[1]= int_num;
num_detail[2]= frac_num;

//easy(num_detail,num_detail);

return num_detail;

}



var fraction = 0;


function easy(num1,num2) {



var ct1= new Number(0);
var ct2= new Number(0);

for (var i = 0; i < num1[1].length; i++) 
if (!isNaN(num1[1][i])) ++ct1; 

for (var j = 0; j < num2[1].length; j++) 
if (!isNaN(num2[1][j])) ++ct2;


while(ct1!=ct2)
{
	if(ct1 < ct2)
	{ num1[1]= "0" + num1[1]; ++ct1;  }  
	else if(ct2 < ct1)
	{ num2[1]= "0" + num2[1]; ++ct2; }
}	

/*    -------------------------- For fractional part -----------------------------------------  */
for (var i = 0; i < num1[2].length; i++) 
if (!isNaN(num1[2][i])) ++ct1; 

for (var j = 0; j < num2[2].length; j++) 
if (!isNaN(num2[2][j])) ++ct2;


while(ct1!=ct2)
{
	if(ct1 < ct2)
	{ num1[2]= num1[2] + "0"; ++ct1;  }  
	else if(ct2 < ct1)
	{ num2[2]= num2[2] + "0"; ++ct2; }
}	


num1[3]= num1[1]+ num1[2];





num1[4] = num2[4] = num1[2].length;



num2[3]= num2[1] + num2[2];



var final_number1 = new Array();
var final_number2 = new Array();


for (var i = 0,j=0; i < num1[3].length; i++,++j) {
	
	if(isNaN(num1[3][i]))
{final_number1[j] = num1[3][i] + num1[3][i+1]; ++i;  }
else
final_number1[j] = num1[3][i];


};

for (var i = 0,j=0; i < num2[3].length; i++,++j) {
	
	if(isNaN(num2[3][i]))
{final_number2[j] = num2[3][i] + num2[3][i+1]; ++i;  }
else
final_number2[j] = num2[3][i];


};

var return_final = new Array();
return_final[0] = final_number1;
return_final[1] = final_number2;
return_final[2] = num1[2].length;


return return_final;
console.log(return_final);







}
