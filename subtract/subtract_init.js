
function subtract_init(){

$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> Subtraction Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var subtract_html="";
subtract_html= subtract_html +"<select id=\"third_subtract_select\"  onclick=\"subtract_button();\">";
subtract_html= subtract_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=520; i++) {
subtract_html=subtract_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

subtract_html= subtract_html + "</select> <div id=\"third_subtract_button\" style=\"display:none\" > </div> ";

$("#third").html(subtract_html);
$("#third").hide();

$("#third").slideDown("slow");

}


function subtract_button(){

if($("#third_subtract_select").val()!=0){

	var subtract_button_html="";

	subtract_button_html=subtract_button_html + button_html_2($("#third_subtract_select").val());

	$("#third_subtract_button").html(subtract_button_html);
	$("#third_subtract_button").slideDown("slow");

	$("#fourth").html("<button onclick=\" subtract_show_ans(); \"> Subtract </button>");

	$("#fourth").slideDown("slow");




    }




}










function subtract_show_ans(){


	if($("#third_subtract_select").val()!=0){

		$("#final").slideUp("slow");


var num1=convert_backup($("#field1").val(),list[$("#first_select").val()],list[$("#third_subtract_select").val()]);

var num2=convert_backup($("#field2").val(),list[$("#third_subtract_select").val()],list[$("#first_select").val()]);

result1 = subtract_start($("#field1").val(),num2,list[$("#first_select").val()]);
result1= "In base " + $("#first_select").val() + " : <b>" + result1 + "</b><br/><br/>";


if($("#first_select").val() != $("#third_subtract_select").val() )
{
result2 = subtract_start(num1,$("#field2").val(),list[$("#third_subtract_select").val()]);
result2= "In base " + $("#third_subtract_select").val() + " : <b>" + result2 + "</b>";
}else
result2 ="";


var final_html= "";
final_html ="<h2><i> The difference of the two numbers is  </i></h2>";

final_html= final_html + result1 + result2;
$("#final").html(final_html);


$("#final").slideDown("slow");     }


}

