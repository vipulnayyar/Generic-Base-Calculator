function add_backup(num1,num2,base){



var carry = new Number(0);
var temp_sum = new Number(0);
var final_sum ="";
var ct= new Number(0);
var temp= new Array();


console.log("num1 " + num1);
console.log("num2 " + num2);

for (var i = num1.length - 1; i >= 0; i--) {
	
				temp_sum = Number(0);
				
				temp_sum = temp_sum + list.indexOf(num1[i]) + list.indexOf(num2[i]) + carry ;


				temp_sum = convert_backup(temp_sum,"a0",base);
				temp_sum = temp_sum +"";

		//console.log("ts "+ temp_sum);

						ct =0;
		for (var j = 0; j < temp_sum.length; j++) 
				{

					if (isNaN(temp_sum[j])) {

					temp[ct]=temp_sum[j] + temp_sum[j+1];
					++j; 	++ct; 


					}else {

						temp[ct] = temp_sum[j] 
						++ct;

					}


				}

				if(ct==2){
				carry = Number(temp_sum[0]);
				final_sum = temp[1] + final_sum;
				}else
				{ carry=0; final_sum = temp[0] + final_sum; }

};

var final_answer = new Array();


if(carry!=0)
{final_sum = carry +final_sum;
final_answer[1] =""+ carry;
}
else
final_answer[1] = "0";
console.log("sum is " + final_sum);




final_answer[0] = final_sum;

return final_answer;



}




function add_start(num1,num2,base){

console.log("add_start " + num1 + " " + num2);


num1 = sign(num1); // contains details about first number ( positive/negative, integer and fractional part) 
var sign1= num1[0];
num2 = sign(num2); // contains details about second number ( positive/negative, integer and fractional part) 
var sign2= num2[0];

var num = easy(num1,num2);
num1= num[0];
num2 = num[1];

/*console.log(num);

console.log(num1);
console.log(num2); */
console.log("going to add");
var sum = add_backup(num1,num2,base);

var fraction = num[2];


var count = 0;

for (var i = sum[0].length - 1; i >= 0; i--) {

	if(isNaN(sum[0][i-1])) --i; 

	++count;

	if(count == fraction)
	{ sum[0] = sum[0].substring(0,i) + "." + sum[0].substring(i);

		break;
	}	





};





return sum;
};