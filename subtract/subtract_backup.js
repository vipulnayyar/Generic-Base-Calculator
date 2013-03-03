function subtract_backup(num1,num2,base){

console.log(num1);
console.log(num2);

var carry = new Number(0);
var temp_difference = new Number(0);
var final_difference ="";
var comp_1 = new Array();
var final_comp= "";


for (var i = 0; i < num1.length ; i++) {
comp_1[i] = list[list.indexOf(base)-1];

};

console.log(comp_1);


console.log(num1)

for (var i = num1.length - 1; i >= 0; i--) {
	
		temp_difference = Number(0);		
		temp_difference = list[ (list.indexOf(comp_1[i]) - list.indexOf(num2[i]) )];

final_comp = temp_difference + final_comp;

				

};

console.log(final_comp);
console.log(num1 + "ds");

var second ="";

for (var i = num1.length - 1; i >= 0; i--) {
	second = num1[i] + second;
};



final_difference = add_start(final_comp,second,base);

console.log(final_difference);


if(final_difference[1] == "0")
{

			comp_1 ="";

			for (var i = 0; i < final_difference[0].length ; i++) {
			comp_1[i] =  list[list.indexOf(base)-1];

			};	


			final_comp ="";
			for (var i = final_difference[0].length - 1; i >= 0; i--) {
				
					temp_difference = Number(0);		
					temp_difference =  comp_1[i] - list.indexOf(final_difference[0][i]);

			final_comp = temp_difference + final_comp;

							

			};

final_difference[0] = "- " + final_comp;




return final_difference[0];


	 }
else
{
console.log(final_difference[0].substr(1) + " test " + final_difference[1]);
final_difference[0] = add_start(final_difference[0].substr(1),final_difference[1],base);

return final_difference[0][0];

}







}





function subtract_start(num1,num2,base){


num1 = sign(num1); // contains details about first number ( positive/negative, integer and fractional part) 
var sign1= num1[0];
num2 = sign(num2); // contains details about second number ( positive/negative, integer and fractional part) 
var sign2= num2[0];

var num = easy(num1,num2);
num1= num[0];
num2 = num[1];

var fraction = num[2];


/*console.log(num);

console.log(num1);
console.log(num2); */
console.log("going to subtract");
var difference = subtract_backup(num1,num2,base);



var count = 0;

for (var i = difference.length - 1; i >= 0; i--) {

	if(isNaN(difference[i-1])) --i; 

	++count;

	if(count == fraction)
	{ difference = difference.substring(0,i) + "." + difference.substring(i);

		break;
	}	





};



return difference;
};