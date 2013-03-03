function multiply_backup(num1,num2,base){


var carry = new Number(0);
var temp_pro = new Number(0);
var final_sum ="";
var diff_sum = new Array();
var sct = 0;

console.log("num1 = " + num1 + " " + num1.length);
console.log("num2 = " + num2 + " " + num2.length);


for (var i = num1.length - 1; i >= 0; i--) {
carry = 0 ;
final_pro ="";
		
				for (var j = num2.length - 1; j >= 0; j--) {

					temp_pro = Number(0);
					
					temp_pro = list.indexOf(num1[i]) * list.indexOf(num2[j]) + carry ;
					//console.log(num1[0] + " " + i +"num1 " + num1[i] + " num2 " + num2[j])
					//console.log(temp_pro);
					temp_pro = convert_backup(temp_pro,"a0",base);
					temp_pro = temp_pro + "";
					var temp = new Array();

					ct =0;

					for (var k = 0; k < temp_pro.length; k++) 
							{

								if (isNaN(temp_pro[k])) {

								temp[ct]=temp_pro[k] + temp_pro[k+1];
								++k; 	++ct; 


								}else {

									temp[ct] = temp_pro[k] 
									++ct;

								}


							}

							if(ct==2){
										carry = Number(temp_pro[0]);
										final_pro = temp[1] + final_pro;
									}else
										{ carry=0; final_pro = temp[0] + final_pro; }




					

				} 

		if(carry!=0)
		final_pro = carry + final_pro;

		diff_sum[sct++] = final_pro; 
		//console.log(final_pro);

		
}



var final_sum = "0";
var zero = new Number(0);
zero = 0;
console.log("didd "+ diff_sum);



for (var i = 0; i< diff_sum.length ; i++) {
	

	for(var j=0;j<zero;++j)
		{diff_sum[i]=diff_sum[i] + "0";
			 //console.log("added ");
		} ++zero;

	final_sum = add_start(final_sum,diff_sum[i],base)[0];


};



//console.log("multiply final answer = " + final_sum);


return final_sum;




};








function multiply_start(num1,num2,base){


num1 = sign(num1); // contains details about first number ( positive/negative, integer and fractional part) 
var sign1= num1[0];
num2 = sign(num2); // contains details about second number ( positive/negative, integer and fractional part) 
var sign2= num2[0];

var num = easy(num1,num2);
num1= num[0];
num2 = num[1];


var fraction = 2 * num[2];


/*console.log(num);

console.log(num1);
console.log(num2); */ 

var product = multiply_backup(num1,num2,base);


var count = 0;

for (var i = product.length - 1; i >= 0; i--) {

	if(isNaN(product[i-1])) --i; 

	++count;

	if(count == fraction)
	{ product = product.substring(0,i) + "." + product.substring(i);

		break;
	}	





};




return product;
};