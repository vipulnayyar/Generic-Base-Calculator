
function and_init(){

	
$("#fourth").slideUp("slow");
$("#final").slideUp("slow");


$("#second_heading").html("<h3> <i> AND Module </i> </h3>");
$("#second_heading").hide();

$("#second_heading").show("");

var and_html="";
and_html= and_html +"<select id=\"third_and_select\"  onclick=\"and_button();\">";
and_html= and_html +"<option name=\"base2\" value=\"0\" id=\"base2_0\">Select the base for the 2nd number</option>";

for (var i = 2; i <=500; i++) {
and_html=and_html+"<option name=\"base2\" value=\""+i+"\" id=\"base2_"+i+"\">"+i+"</option>";
};

and_html= and_html + "</select> <div id=\"third_and_button\" style=\"display:none\" > </div> ";

$("#third").html(and_html);
$("#third").hide();

$("#third").slideDown("slow");

}


function and_button(){

if($("#third_and_select").val()!=0){

	var and_button_html="";

	and_button_html=and_button_html + button_html_2($("#third_and_select").val());

	$("#third_and_button").html(and_button_html);
	$("#third_and_button").slideDown("slow");

	$("#fourth").html("<button onclick=\" and_show_ans(); \"> Get AND </button>");
	$("#fourth").slideDown("slow");



    }




}










function and_show_ans(){


	if($("#third_and_select").val()!=0){
		$("#final").slideUp("slow");


var result1=convert_backup($("#field1").val(),list[$("#first_select").val()],"2");
var result2=convert_backup($("#field2").val(),list[$("#third_and_select").val()],"2");

var final_html= "";
final_html ="<h2><i> The AND of the two numbers is  </i></h2>";

final_html= final_html + " In base " + $("#first_select").val() + " : <b> " + convert_backup(and(result1,result2),"2", list[$("#first_select").val()]) + "</b>";
final_html= final_html + " <br/><br/>In base " + $("#third_and_select").val() + " : <b>" + convert_backup(and(result1,result2),"2", list[$("#third_and_select").val()]) + "</b>";

console.log(and(result1,result2));
$("#final").html(final_html);


$("#final").slideDown("slow");     }


}

