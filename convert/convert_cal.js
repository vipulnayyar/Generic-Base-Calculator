




/* ----------------  Convert single digits in any base ---------------------------------------   */
function convert_small(num,base2){

var ans ="";


if (isNaN(num[0]))
var num = new Number(list.indexOf(num[0]+num[1]));
else
var num = new Number(list.indexOf(num[0]));

while(Math.floor(num)!=0){

		num = Math.floor(num);

		if (isNaN(base2[0]))
		 {
		ans = list[(num  % list.indexOf(base2) )] + ans;
		num  = num / list.indexOf(base2);
		 }
		else
		{ans = list[(num  % base2 )] + ans;
		num  = num / base2; }


}

return ans;
}

/* --------------------------  End of small Function --------------------------------------------   */







/* -------------------------- Convert multiple digit nos in any base  ---------------------------   */

/*
function convert_big(big_num,base1,base2)  {

	//console.log("convert enter");
	big_num = "" + big_num;

	if (isNaN(big_num[0]))
	{var big_first = big_num[0] + big_num[1];	var st= 2; }
	else
	{var big_first = big_num[0]; var st = 1; }

//console.log("first" + big_first + "num = "+big_num[0]);

var ans = new Number(convert_small(big_first,base2));
//console.log("first digit in base 2 = " + ans);
//alert(typeof(ans)); 


			for ( ; st < big_num.length; st++) {


			//alert(convert_small(base1,base2));
			//alert(convert_small(big_num[st],base2));

			ans = multiply(ans , base2, convert_small(base1,base2) , base2 ); // Multiply function needed

//console.log("ans "+ans + "p "+ convert_small(base1,base2));


			if (isNaN(big_num[st]))
			{var big_temp = big_num[st] + big_num[st+1];	 ++st; }
			else
			var big_temp = big_num[st]; 




			//alert("mid ans =" + ans);
console.log("number sent to add_small() " + ans + " " + Number(convert_small(big_temp,base2)) );
			ans = add_small(ans , Number(convert_small(big_temp,base2)) , base2); // Addition function needed 

			}




//alert(ans);



//return convert_small(big_first,base2);
return ans; 

}  */



/* --------------------------------  End of second function ------------------------------------   */


function convert_backup(num1,base1,base2){

	num1= ""+ num1;

	if(num1.indexOf(".")>-1)
	{fraction = num1.substr(num1.indexOf(".")+1).length;
num1 = num1.substring(0,num1.indexOf(".")) + num1.substr(num1.indexOf(".") +1);
	}
	else fraction = 0;




console.log("num1 " + num1);
var base_10 = new Number(0);




for (var i = num1.length - 1 , j=0; i >= 0; i-- , ++j) {

	if(i>0 && isNaN(num1[i-1]))
{base_10=base_10 +( list.indexOf(num1[i-1] + num1[i]) *  Math.pow(list.indexOf(base1), j )); --i; }
else
base_10=base_10 +( Number(num1[i]) *  Math.pow(list.indexOf(base1), j ) );


};



for (var i = 0; i < fraction; i++) {

base_10 = base_10 / list.indexOf(base1);


 };



console.log(base_10);

//console.log("base 10= "+ base_10);


var num = Math.floor(base_10);
var frac = base_10 - num;
console.log("frac = "+ frac);

if(num==0)
	ans ="0";
else
	ans="";

while(Math.floor(num)!=0){

		num = Math.floor(num);

		if (isNaN(base2[0]))
		 {
		ans = list[(num  % list.indexOf(base2) )] + ans;
		num  = num / list.indexOf(base2);
		 }
		else
		{ans = list[(num  % base2 )] + ans;
		num  = num / base2; }


}


var ans1="";

for (var i = 0; i < fraction; i++) {



ans1= ans1 + list[ Math.floor( list.indexOf(base2) * frac ) ];

frac = (list.indexOf(base2) * frac )- Math.floor(list.indexOf(base2) * frac);

console.log(" = " + frac);


};

if(ans1.length > 0) ans1 = "." + ans1;

console.log("frac is finally "+ ans1);

return ans + ans1;

}