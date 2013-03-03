
function multiply_init(){

$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> Multiplication Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var multiply_html="";
multiply_html= multiply_html +"<select id=\"third_multiply_select\"  onclick=\"multiply_button();\">";
multiply_html= multiply_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=520; i++) {
multiply_html=multiply_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

multiply_html= multiply_html + "</select> <div id=\"third_multiply_button\" style=\"display:none\" > </div> ";

$("#third").html(multiply_html);
$("#third").hide();

$("#third").slideDown("slow");

}











function multiply_button(){

if($("#third_multiply_select").val()!=0)
	{
		var multiply_button_html="";

		multiply_button_html=multiply_button_html + button_html_2($("#third_multiply_select").val());

		$("#third_multiply_button").html(multiply_button_html);
		$("#third_multiply_button").slideDown("slow");
		$("#fourth").html("<button onclick=\" multiply_show_ans(); \"> Get Product </button>");
	    $("#fourth").slideDown("slow");

    }




}










function multiply_show_ans(){


	if($("#third_multiply_select").val()!=0){
$("#final").slideUp("slow");


var num1=convert_backup($("#field1").val(),list[$("#first_select").val()],list[$("#third_multiply_select").val()]);

var num2=convert_backup($("#field2").val(),list[$("#third_multiply_select").val()],list[$("#first_select").val()]);




var final_html= "";
final_html ="<h2><i> The Product of the two numbers is  </i></h2>";

final_html= final_html + "In base " + $("#first_select").val() + " : <b>" + multiply_start($("#field1").val(),num2,list[$("#first_select").val()]) + "</b>";

if($("#first_select").val() != $("#third_multiply_select").val() )
final_html= final_html + "<br/><br/>In base " + $("#third_multiply_select").val() + " : <b>" + multiply_start(num1,$("#field2").val(),list[$("#first_select").val()]) + "</b>";






$("#final").html(final_html);


$("#final").slideDown("slow");     }


}

