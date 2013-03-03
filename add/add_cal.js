
function add(num1,base1,num2,base2){

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


var carry = new Number(0);
var temp_sum = new Number(0);
var final_sum ="";

//console.log(num1);
//console.log(num2);

/* ---------------------  Start of FOR loop ----------------------------------   */
for (var i = num1.length - 1 , j= num2.length -1; i >= 0,j>=0; --i,--j) {
temp_sum = Number(0);
//console.log("carry = "+ carry);


if( (i>0) && ( isNaN(num1[i-1]) ) && ( isNaN(num2[i-1]) ) )
{temp_sum = temp_sum + list.indexOf("" + num1[i-1] + num1[i] ) + list.indexOf("" + num2[i-1] + num2[i] ) + carry ;
--i;


}
else
if( (i>0) && ( isNaN(num1[i-1]) ) )
{temp_sum = temp_sum + list.indexOf("" + num1[i-1] + num1[i] ) + num2[i] + carry ;
--i;
}
else
if( (i>0) && ( isNaN(num2[i-1]) ) )
{temp_sum = temp_sum + num1[i] + list.indexOf("" + num2[i-1] + num2[i] ) + carry ;
--i;
}
else
{temp_sum = temp_sum + Number(num1[i]) + Number(num2[i]) + carry ;
//console.log("q= " + temp_sum + "," + num1[i] +"," + num2[i] +"," + carry);
}


temp_sum = convert_backup(temp_sum,base1,base2);
//console.log ("sum = " + temp_sum);
temp_sum = temp_sum +"";

if (isNaN(temp_sum[0]))
{final_sum =  temp_sum + final_sum; //console.log("t " + temp_sum[0]); carry = 0; 
}
else if(!isNaN(temp_sum[1]))
{ carry = Number(temp_sum[0]); console.log("ca " + carry + "," + temp_sum) ;
  final_sum = temp_sum[1] + final_sum ; }
else{ //console.log("fi" + temp_sum);
carry = 0;   final_sum = temp_sum + final_sum ;


}

//console.log(final_sum);


	
}

/* ----------------------------------- End of for loop --------------------------------------------  */

if(carry!=0)
final_sum = carry +final_sum;

//alert(final_sum);
//console.log("add sum = " + final_sum);
return final_sum;

}


/*- ------------------------------------- Big function end -------------------------------------------   */













function add_small(num1,num2,base){
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


var carry = new Number(0);
var temp_sum = new Number(0);
var final_sum ="";

console.log(num1);
console.log(num2);

for (var i = num1.length - 1; i >= 0; --i) {
temp_sum = Number(0);
//console.log("carry = "+ carry);


if( (i>0) && ( isNaN(num1[i-1]) ) && ( isNaN(num2[i-1]) ) )
{temp_sum = temp_sum + list.indexOf("" + num1[i-1] + num1[i] ) + list.indexOf("" + num2[i-1] + num2[i] ) + carry ;
--i;
}

else
if( (i>0) && ( isNaN(num1[i-1]) ) )
{temp_sum = temp_sum + list.indexOf("" + num1[i-1] + num1[i] ) + num2[i] + carry ;
--i;
}

else
if( (i>0) && ( isNaN(num2[i-1]) ) )
{temp_sum = temp_sum + num1[i] + list.indexOf("" + num2[i-1] + num2[i] ) + carry ;
--i;
}

else
{temp_sum = temp_sum + Number(num1[i]) + Number(num2[i]) + carry ;
//console.log("q= " + temp_sum + "," + num1[i] +"," + num2[i] +"," + carry);
}

//console.log ("sum = " + temp_sum);

temp_sum = convert_backup(temp_sum,"a0",base);
temp_sum = temp_sum +"";

//console.log("temp_sum = "+temp_sum);

var ct = new Number(0);
for (var j = 0; j < temp_sum.length; j++) 
if (!isNaN(num1[j])) ++ct; 


//console.log("ct= "+ct);
		if(ct==2){

				if (isNaN(temp_sum[1]) )
				{
					final_sum =  temp_sum[1] + temp_sum[2] + final_sum; //console.log("t " + temp_sum[0]); 
					carry = list.indexOf(temp_sum[0]) ;

				}
				else{
					final_sum= temp_sum[1] + final_sum; carry = list.indexOf(temp_sum[0]);
					//console.log("final_sum " + final_sum + " carr "+carry);

				}



		}
		else
		{
			if (isNaN(temp_sum[0]) )
				{
					final_sum =  temp_sum + final_sum; //console.log("t " + temp_sum[0]); 
					carry = 0;
				}
				else{
					final_sum= temp_sum + final_sum; carry = 0;

				}


		}	


	}

if(carry!=0)
final_sum = carry +final_sum;






	console.log("final sum= "+final_sum);

return final_sum;



}