
function multiply(num1,num2,base1){

var ct1= new Number(0);
var ct2= new Number(0);

for (var i = 0; i < num1.length; i++) 
if (!isNaN(num1[i])) ++ct1; 

for (var j = 0; j < num2.length; j++) 
if (!isNaN(num2[j])) ++ct2;



var carry = new Number(0);
var temp_pro = new Number(0);
var final_sum ="";
var diff_sum = new Array();
var sct = 0;
//num2 = convert_big(num2, base2, base1);
//console.log("succ");
//num2 = convert_backup(num2,base2,base1);
num1="" +num1;

//console.log("num1 = " + num1 );
//console.log("num2 = " + num2 );

/* ---------------------  Start of FOR loop ----------------------------------   */


for (var i = num1.length - 1; i >= 0; i--) {
carry = 0 ;
final_pro ="";
//console.log("enter first loop");
		for (var j = num2.length - 1; j >= 0; j--) {

			temp_pro = Number(0);
			//console.log("temp " + temp_pro);
			

			if( (i>0) && (j>0) && ( isNaN(num1[i-1]) ) && ( isNaN(num2[j-1]) ) )
			{temp_pro = list.indexOf("" + num1[i-1] + num1[i] ) * list.indexOf("" + num2[j-1] + num2[j] ) + carry ;
				--i; --j;
				//console.log("")
			}
			else
			if( (i>0) && (j>0) && ( isNaN(num1[i-1]) )  )
			{temp_pro = list.indexOf("" + num1[i-1] + num1[i] ) * num2[j] + carry ;
				--i; 
			}	
			else
			if( (i>0) && (j>0) && ( isNaN(num2[i-1]) )  )
			{temp_pro = num1[i] * list.indexOf("" + num2[j-1] + num2[j] ) + carry ;
				 --j;
			}				
			else
			{// console.log("enter " + typeof(temp_pro) + temp_pro);
				//console.log("num1 " + num1[i] + "num2 " +  num2[j]);


				temp_pro = ( Number(num1[i]) * Number(num2[j]) ) + carry ;
				//console.log( typeof(temp_pro) + " " + temp_pro );

			}	



			temp_pro = convert_backup(temp_pro,"a0",base1);
			temp_pro = temp_pro + "";

			if (isNaN(temp_pro[0]))
			{final_pro =  temp_pro + final_pro; //console.log("t " + temp_pro[0]); 
				carry = 0;
			 }
			else if(!isNaN(temp_pro[1]))
			{ carry = Number(temp_pro[0]); //console.log("ca " + carry + "," + temp_pro) ;
  			final_pro = temp_pro[1] + final_pro ; }
			else{ //console.log("fi" + temp_pro);
			carry = 0;   final_pro = temp_pro + final_pro ; }


		} 

		if(carry!=0)
		final_pro = carry + final_pro;
		diff_sum[sct++] = final_pro; 
		//console.log(final_pro);
		
}


var final_sum = "0";
var zero = new Number(0);
zero = 0;
//console.log("didd "+ diff_sum);


for (var i = 0; i< diff_sum.length ; i++) {
	

	for(var j=0;j<zero;++j)
		{diff_sum[i]=diff_sum[i] + "0";
			 //console.log("added ");
		} ++zero;

//console.log( i + " no is "+ diff_sum[i]);
	final_sum = add_small(final_sum,diff_sum[i],base1);








}




console.log("multiply final answer = " + final_sum);

return final_sum;

}