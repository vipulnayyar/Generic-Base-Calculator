
function divide_init(){

$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> Division Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var divide_html="";
divide_html= divide_html +"<select id=\"third_divide_select\"  onclick=\"divide_button();\">";
divide_html= divide_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=520; i++) {
divide_html=divide_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

divide_html= divide_html + "</select> <div id=\"third_divide_button\" style=\"display:none\" > </div> ";

$("#third").html(divide_html);
$("#third").hide();

$("#third").slideDown("slow");

}


function divide_button(){

if($("#third_divide_select").val()!=0){

	var divide_button_html="";

	divide_button_html=divide_button_html + button_html_2($("#third_divide_select").val());

	$("#third_divide_button").html(divide_button_html);
	$("#third_divide_button").slideDown("slow");

	$("#fourth").html("<button onclick=\" divide_show_ans(); \"> Divide </button>");
	$("#fourth").slideDown("slow");




    }




}










function divide_show_ans(){


	if($("#third_divide_select").val()!=0){

$("#final").slideUp("slow");


var num1=convert_backup($("#field1").val(),list[$("#first_select").val()],"a0");

var num2=convert_backup($("#field2").val(),list[$("#third_divide_select").val()],"a0");

var final_html ="<h2><i> The division of the two numbers is  </i></h2>";


result1 = convert_backup( Number(num1) / Number(num2),"a0", list[$("#first_select").val()] );
result1= "In base " + $("#first_select").val() + " : <b>" + result1 + " </b> <br/><br/>";

final_html = final_html + result1;

result2 = convert_backup( Number(num1) / Number(num2),"a0", list[$("#third_divide_select").val()] );
result2= "In base " + $("#third_divide_select").val() + " : <b> " + result2 + "</b>";

if($("#first_select").val() != $("#third_divide_select").val() )
final_html= final_html + result2;


$("#final").html(final_html);



$("#final").slideDown("slow");     }


}

